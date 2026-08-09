import { EstimateSourceFlag, MarketMetrics, MarketRecord, PropertyContext, SaleHistoryRecord, SubjectProperty, TaxRateRecord } from "./types";
import { average, daysBetween } from "./math";

function getTaxRate(subject: SubjectProperty, taxRates: TaxRateRecord[]): number {
  const city = taxRates.find((r) => r.province === subject.province && r.cityOrRegion === subject.city);
  if (city) return city.annualTaxRate;
  const province = taxRates.find((r) => r.province === subject.province && r.cityOrRegion === "All Cities / Province Default");
  if (province) return province.annualTaxRate;
  const national = taxRates.find((r) => r.province === "Canada" && r.cityOrRegion === "National Default");
  return national?.annualTaxRate ?? 0.009;
}

function latestSale(history: SaleHistoryRecord[]): SaleHistoryRecord | undefined {
  return [...history].sort((a, b) => a.saleDate.localeCompare(b.saleDate)).pop();
}

export function buildPropertyContext(params: {
  subject: SubjectProperty;
  publishedEstimate: number;
  estimateSourceFlag: EstimateSourceFlag;
  marketMetrics: MarketMetrics;
  marketRows: MarketRecord[];
  saleHistory: SaleHistoryRecord[];
  taxRates: TaxRateRecord[];
}): PropertyContext {
  const { subject, publishedEstimate, estimateSourceFlag, marketMetrics, marketRows, saleHistory, taxRates } = params;

  const taxRateUsed = getTaxRate(subject, taxRates);
  const annualPropertyTax = subject.actualTax && subject.actualTax > 0 ? subject.actualTax : publishedEstimate * taxRateUsed;
  const monthlyPropertyTax = annualPropertyTax / 12;
  const propertyTaxSource = subject.actualTax && subject.actualTax > 0 ? "Actual / imported" : "Estimated from tax rate";

  const latest = latestSale(saleHistory);
  const latestSaleDate = latest?.saleDate;
  const latestSalePrice = latest?.salePrice;
  const yearsSinceLastSale = latestSaleDate ? daysBetween(subject.valuationDate, latestSaleDate) / 365.25 : undefined;
  const changeSinceLastSale = latestSalePrice ? publishedEstimate - latestSalePrice : undefined;
  const appreciationSinceLastSale = latestSalePrice ? publishedEstimate / latestSalePrice - 1 : undefined;

  const start = new Date(subject.valuationDate);
  start.setDate(start.getDate() - subject.analysisWindowDays);
  const startIso = start.toISOString().slice(0, 10);

  const localWindowRows = marketRows.filter((r) => r.city === subject.city && r.propertyType === subject.propertyType && r.saleDate >= startIso && r.saleDate <= subject.valuationDate);
  const localAllDateRows = marketRows.filter((r) => r.city === subject.city && r.propertyType === subject.propertyType);
  const sourceRows = localWindowRows.length ? localWindowRows : localAllDateRows;

  const averageDomLocal = average(sourceRows.map((r) => r.dom ?? 0).filter((v) => v > 0));
  const averageSale = average(sourceRows.map((r) => r.salePrice).filter((v) => v > 0));
  const averageList = average(sourceRows.map((r) => r.listPrice ?? 0).filter((v) => v > 0));
  const listToSaleRatioLocal = averageList > 0 ? averageSale / averageList : 0;

  const allDateAverage = average(localAllDateRows.map((r) => r.salePrice).filter((v) => v > 0));
  const areaTrendProxy = allDateAverage > 0 ? marketMetrics.medianSalePrice / allDateAverage - 1 : 0;

  const monthlyRentEstimate = subject.rentOverride && subject.rentOverride > 0
    ? subject.rentOverride
    : average(sourceRows.map((r) => r.rent ?? 0).filter((v) => v > 0));

  const grossYield = publishedEstimate > 0 ? (monthlyRentEstimate * 12) / publishedEstimate : 0;

  const contextGuidance =
    estimateSourceFlag === "External Estimate"
      ? "Use context values for supporting interpretation only. The published value is external, not a Dwelltea estimate."
      : "Use these context fields to help users interpret carrying cost, pricing history, market liquidity, and rental economics around the Dwelltea estimate.";

  return {
    taxRateUsed,
    annualPropertyTax,
    monthlyPropertyTax,
    propertyTaxSource,
    latestSaleDate,
    latestSalePrice,
    yearsSinceLastSale,
    changeSinceLastSale,
    appreciationSinceLastSale,
    averageDomLocal,
    listToSaleRatioLocal,
    areaTrendProxy,
    monthlyRentEstimate,
    grossYield,
    contextGuidance,
  };
}

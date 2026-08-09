import { MarketMetrics, MarketRecord, PropertyTypeProfile, RegionCityMultiplier, SubjectProperty } from "./types";
import { median, subtractDays } from "./math";

function inWindow(subject: SubjectProperty, row: MarketRecord): boolean {
  const start = subtractDays(subject.valuationDate, subject.analysisWindowDays);
  return row.saleDate >= start && row.saleDate <= subject.valuationDate;
}

function rowsForCityAndType(subject: SubjectProperty, rows: MarketRecord[]): MarketRecord[] {
  return rows.filter((r) => r.city === subject.city && r.propertyType === subject.propertyType);
}

function bedMedian(rows: MarketRecord[], beds: number): number {
  return median(rows.filter((r) => r.bedrooms === beds).map((r) => r.salePrice));
}

function getMultiplier(subject: SubjectProperty, multipliers: RegionCityMultiplier[]) {
  const city = multipliers.find((m) => m.province === subject.province && m.cityOrRegion === subject.city);
  if (city) return { selectedMultiplier: city.multiplier, multiplierSourceTier: "City multiplier" as const };

  const province = multipliers.find((m) => m.province === subject.province && m.cityOrRegion === "All Cities / Province Default");
  if (province) return { selectedMultiplier: province.multiplier, multiplierSourceTier: "Province multiplier" as const };

  const national = multipliers.find((m) => m.province === "Canada" && m.cityOrRegion === "National Default");
  return { selectedMultiplier: national?.multiplier ?? 1, multiplierSourceTier: "National default multiplier" as const };
}

export function calculateMarketMetrics(params: {
  subject: SubjectProperty;
  marketRows: MarketRecord[];
  profile: PropertyTypeProfile;
  multipliers: RegionCityMultiplier[];
  minRequiredComps: number;
}): MarketMetrics {
  const { subject, marketRows, profile, multipliers, minRequiredComps } = params;
  const localRows = rowsForCityAndType(subject, marketRows).filter((r) => inWindow(subject, r));
  const allDateRows = rowsForCityAndType(subject, marketRows);
  const cityAllTypeDateRows = marketRows.filter((r) => r.city === subject.city && inWindow(subject, r));

  const localCompCount = localRows.length;
  const allDateCompCount = allDateRows.length;
  const cityAllTypeDateCount = cityAllTypeDateRows.length;

  const selectedDataTier =
    localCompCount >= minRequiredComps ? "Exact local" :
    localCompCount > 0 ? "Hybrid-supporting" :
    "Type profile fallback";

  const multiplierInfo = getMultiplier(subject, multipliers);

  const localMedianSalePrice = median(localRows.map((r) => r.salePrice));
  const allDateMedianSalePrice = median(allDateRows.map((r) => r.salePrice));
  const fallbackMedianSalePrice = profile.medianSalePrice * multiplierInfo.selectedMultiplier;

  const localMedianPPSF = median(localRows.map((r) => r.pricePerSqft ?? r.salePrice / r.sqft));
  const allDateMedianPPSF = median(allDateRows.map((r) => r.pricePerSqft ?? r.salePrice / r.sqft));
  const fallbackMedianPPSF = profile.medianPPSF * multiplierInfo.selectedMultiplier;

  const median2Bed = bedMedian(localRows, 2) || bedMedian(allDateRows, 2) || profile.median2Bed * multiplierInfo.selectedMultiplier;
  const median3Bed = bedMedian(localRows, 3) || bedMedian(allDateRows, 3) || profile.median3Bed * multiplierInfo.selectedMultiplier;
  const median4Bed = bedMedian(localRows, 4) || bedMedian(allDateRows, 4) || profile.median4Bed * multiplierInfo.selectedMultiplier;
  const median5Bed = bedMedian(localRows, 5) || bedMedian(allDateRows, 5) || profile.median5Bed * multiplierInfo.selectedMultiplier;

  return {
    localCompCount,
    allDateCompCount,
    cityAllTypeDateCount,
    selectedDataTier,
    selectedMultiplier: multiplierInfo.selectedMultiplier,
    multiplierSourceTier: multiplierInfo.multiplierSourceTier,
    fallbackUseGuidance: selectedDataTier === "Exact local"
      ? "Exact local data used - multiplier not applied"
      : "Property type profile baseline × selected multiplier",
    medianSalePrice: localMedianSalePrice || allDateMedianSalePrice || fallbackMedianSalePrice,
    medianPPSF: localMedianPPSF || allDateMedianPPSF || fallbackMedianPPSF,
    median2Bed,
    median3Bed,
    median4Bed,
    median5Bed,
    bedroomGap: Math.max(0, median3Bed - median2Bed),
  };
}

import type { PropertyDoc, SaleHistoryEntry, ValuationDoc } from "../../types";

export const SEATTLE_COMP_POOL_ADDRESSES = [
  "100 maple st",
  "200 maple st",
  "300 maple st",
  "400 maple st",
  "500 maple st",
] as const;

export const MOCK_SUBJECT_ADDRESS = "123 maple st";

const COMP_IMAGE_URLS = [
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
];

const COMP_GEOS: [number, number][] = [
  [-122.3488, 47.621],
  [-122.3501, 47.6198],
  [-122.3475, 47.6202],
  [-122.351, 47.6195],
  [-122.349, 47.6212],
];

const NEIGHBORHOODS = [
  "Capitol Hill",
  "Madison Park",
  "Montlake",
  "Eastlake",
  "Wallingford",
];

export interface MockCompSpec {
  address: string;
  salePrice: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt: number;
  condition: number;
  geo: [number, number];
  imageUrl: string;
  neighborhood: string;
  listPrice: number;
  daysOnMarket: number;
}

export const COMP_SPECS: MockCompSpec[] = [
  {
    address: SEATTLE_COMP_POOL_ADDRESSES[0],
    salePrice: 910000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1750,
    yearBuilt: 2003,
    condition: 4,
    geo: COMP_GEOS[0],
    imageUrl: COMP_IMAGE_URLS[0],
    neighborhood: NEIGHBORHOODS[0],
    listPrice: 925000,
    daysOnMarket: 18,
  },
  {
    address: SEATTLE_COMP_POOL_ADDRESSES[1],
    salePrice: 940000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 1950,
    yearBuilt: 2008,
    condition: 5,
    geo: COMP_GEOS[1],
    imageUrl: COMP_IMAGE_URLS[1],
    neighborhood: NEIGHBORHOODS[1],
    listPrice: 959000,
    daysOnMarket: 12,
  },
  {
    address: SEATTLE_COMP_POOL_ADDRESSES[2],
    salePrice: 880000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1650,
    yearBuilt: 1999,
    condition: 3,
    geo: COMP_GEOS[2],
    imageUrl: COMP_IMAGE_URLS[2],
    neighborhood: NEIGHBORHOODS[2],
    listPrice: 899000,
    daysOnMarket: 24,
  },
  {
    address: SEATTLE_COMP_POOL_ADDRESSES[3],
    salePrice: 960000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2050,
    yearBuilt: 2010,
    condition: 4,
    geo: COMP_GEOS[3],
    imageUrl: COMP_IMAGE_URLS[3],
    neighborhood: NEIGHBORHOODS[3],
    listPrice: 975000,
    daysOnMarket: 15,
  },
  {
    address: SEATTLE_COMP_POOL_ADDRESSES[4],
    salePrice: 899000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1700,
    yearBuilt: 2001,
    condition: 4,
    geo: COMP_GEOS[4],
    imageUrl: COMP_IMAGE_URLS[4],
    neighborhood: NEIGHBORHOODS[4],
    listPrice: 915000,
    daysOnMarket: 21,
  },
];

const SUBJECT_GEO: [number, number] = [-122.3493, 47.6205];

function hashAddress(address: string): number {
  let h = 0;
  for (let i = 0; i < address.length; i++) {
    h = (Math.imul(31, h) + address.charCodeAt(i)) >>> 0;
  }
  return h;
}

function yearsAgo(years: number, from: Date): Date {
  const d = new Date(from);
  d.setFullYear(d.getFullYear() - years);
  return d;
}

function buildSaleHistory(
  latestPrice: number,
  latestDate: Date,
  index: number
): SaleHistoryEntry[] {
  const priorPrice = Math.round(latestPrice * (0.82 + (index % 3) * 0.03));
  const priorDate = yearsAgo(4 + (index % 2), latestDate);
  const olderPrice = Math.round(priorPrice * 0.78);
  const olderDate = yearsAgo(8, latestDate);

  return [
    {
      saleDate: latestDate,
      salePrice: latestPrice,
      sourceProvider: "mock-repliers",
      recordId: `RPL-SALE-${index}-latest`,
      instrumentType: "Warranty Deed",
    },
    {
      saleDate: priorDate,
      salePrice: priorPrice,
      sourceProvider: "mock-houski",
      recordId: `HK-SALE-${index}-prior`,
      instrumentType: "Warranty Deed",
    },
    {
      saleDate: olderDate,
      salePrice: olderPrice,
      sourceProvider: "mock-repliers",
      recordId: `RPL-SALE-${index}-older`,
      instrumentType: "Warranty Deed",
    },
  ];
}

function buildProvenanceFields(address: string, index: number, refreshedAt: Date) {
  const hash = hashAddress(address);
  return {
    houskiPropertyId: `HK-${hash.toString(16).padStart(8, "0")}`,
    repliersMlsNumber: `RPL-${100000 + index + (hash % 900000)}`,
    sourceProvider: "mock-repliers-houski",
    sourceRecordId: `MOCK-${hash.toString(16)}`,
    sourceLastRefreshed: refreshedAt,
  };
}

function buildLocationFields(neighborhood: string) {
  return {
    city: "Seattle",
    province: "Washington",
    state: "Washington",
    country: "USA",
    propertyType: "Detached",
    neighborhood,
    schoolDistrict: "Seattle Public Schools",
    modelArea: "Seattle Metro",
  };
}

export function buildMockCompProperty(spec: MockCompSpec, refreshedAt: Date): Omit<PropertyDoc, "comparable_props"> & {
  comparable_props: PropertyDoc["comparable_props"];
} {
  const index = COMP_SPECS.findIndex((s) => s.address === spec.address);
  const assessedValue = Math.round(spec.salePrice * 0.86);
  const actualTax = Math.round(assessedValue * 0.0095);
  const rentMonthly = Math.round(spec.salePrice * 0.0032);

  return {
    address: spec.address,
    ...buildLocationFields(spec.neighborhood),
    geo_location: { type: "Point", coordinates: spec.geo },
    age: new Date().getFullYear() - spec.yearBuilt,
    latest_sale_price: { price: spec.salePrice, date: refreshedAt },
    sale_history: buildSaleHistory(spec.salePrice, refreshedAt, index >= 0 ? index : 0),
    condition: String(spec.condition),
    conditionScore: spec.condition,
    comparable_props: [],
    bedrooms: spec.bedrooms,
    bathrooms: spec.bathrooms,
    squareFeet: spec.sqft,
    yearBuilt: spec.yearBuilt,
    imageUrl: spec.imageUrl,
    assessedValue,
    actualTax,
    rentMonthly,
    listPrice: spec.listPrice,
    daysOnMarket: spec.daysOnMarket,
    ...buildProvenanceFields(spec.address, index >= 0 ? index : 0, refreshedAt),
  };
}

export interface MockSubjectSpec {
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt: number;
  condition: number;
  geo: [number, number];
  neighborhood: string;
  imageUrl: string;
}

function subjectSpecForAddress(address: string): MockSubjectSpec {
  if (address === MOCK_SUBJECT_ADDRESS) {
    return {
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      yearBuilt: 2005,
      condition: 4,
      geo: SUBJECT_GEO,
      neighborhood: "Capitol Hill",
      imageUrl:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
    };
  }

  const hash = hashAddress(address);
  const yearBuilt = 1985 + (hash % 30);
  return {
    bedrooms: 2 + (hash % 3),
    bathrooms: 1 + (hash % 3),
    sqft: 1400 + (hash % 900),
    yearBuilt,
    condition: 3 + (hash % 3),
    geo: [
      SUBJECT_GEO[0] + ((hash % 100) - 50) * 0.0001,
      SUBJECT_GEO[1] + ((hash % 100) - 50) * 0.0001,
    ],
    neighborhood: NEIGHBORHOODS[hash % NEIGHBORHOODS.length],
    imageUrl: COMP_IMAGE_URLS[hash % COMP_IMAGE_URLS.length],
  };
}

export function buildMockSubjectProperty(
  address: string,
  refreshedAt: Date
): PropertyDoc {
  const spec = subjectSpecForAddress(address);
  const hash = hashAddress(address);
  const estimatedValue = 850000 + (hash % 150000);
  const assessedValue = Math.round(estimatedValue * 0.86);
  const actualTax = Math.round(assessedValue * 0.0095);
  const rentMonthly = Math.round(estimatedValue * 0.0032);

  return {
    address,
    ...buildLocationFields(spec.neighborhood),
    geo_location: { type: "Point", coordinates: spec.geo },
    age: new Date().getFullYear() - spec.yearBuilt,
    latest_sale_price: {
      price: estimatedValue,
      date: yearsAgo(2, refreshedAt),
    },
    sale_history: buildSaleHistory(estimatedValue, yearsAgo(2, refreshedAt), hash % 5),
    condition: String(spec.condition),
    conditionScore: spec.condition,
    comparable_props: SEATTLE_COMP_POOL_ADDRESSES.map((compAddress) => ({
      address: compAddress,
    })),
    bedrooms: spec.bedrooms,
    bathrooms: spec.bathrooms,
    squareFeet: spec.sqft,
    yearBuilt: spec.yearBuilt,
    imageUrl: spec.imageUrl,
    assessedValue,
    actualTax,
    rentMonthly,
    listPrice: Math.round(estimatedValue * 1.03),
    daysOnMarket: 10 + (hash % 20),
    ...buildProvenanceFields(address, hash % 5, refreshedAt),
  };
}

export function buildMockValuationShell(
  address: string,
  refreshedAt: Date
): Partial<ValuationDoc> & Pick<ValuationDoc, "address" | "estimated_value"> {
  const hash = hashAddress(address);
  const baseEstimate = 850000 + (hash % 150000);
  const houskiEstimate = baseEstimate + (hash % 12000) - 6000;
  const repliersEstimate = baseEstimate + ((hash >> 4) % 15000) - 7500;

  return {
    address,
    valuationDate: refreshedAt,
    analysisWindowDays: 90,
    requestedCompCount: 5,
    minRequiredComps: 3,
    externalFallbackPolicy: "Prefer External fallback",
    externalEstimatePreference: "Average",
    estimated_value: {
      houski_estimate: houskiEstimate,
      repliers_estimate: repliersEstimate,
      houski_timestamp: refreshedAt,
      repliers_timestamp: refreshedAt,
    },
    trendData: [
      { x: 0, y: baseEstimate - 60000 },
      { x: 1, y: baseEstimate - 45000 },
      { x: 2, y: baseEstimate - 30000 },
      { x: 3, y: baseEstimate - 15000 },
      { x: 4, y: baseEstimate - 5000 },
      { x: 5, y: baseEstimate },
    ],
    marketTemperature: "hot",
  };
}

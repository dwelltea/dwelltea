import {
  externalEstimateInputsFromValuation,
  marketRecordFromPropertyDoc,
  profileForProperty,
  subjectFromPropertyDoc,
} from "../build-input";
import { runPropertyValuation } from "../index";
import type { PropertyDoc, ValuationDoc } from "../../../types";

const valuation: ValuationDoc = {
  address: "123 maple st",
  valuationDate: new Date("2026-03-20"),
  analysisWindowDays: 90,
  requestedCompCount: 5,
  minRequiredComps: 3,
  externalFallbackPolicy: "Prefer External fallback",
  externalEstimatePreference: "Average",
  estimated_value: { houski_estimate: 0, repliers_estimate: 0 },
};

const subject: PropertyDoc = {
  address: "123 maple st",
  city: "Seattle",
  province: "Washington",
  propertyType: "Detached",
  geo_location: { type: "Point", coordinates: [-122.3493, 47.6205] },
  bedrooms: 3,
  bathrooms: 2,
  squareFeet: 1800,
  yearBuilt: 2005,
  conditionScore: 4,
  comparable_props: [{ address: "100 maple st" }],
};

const comp: PropertyDoc = {
  address: "100 maple st",
  city: "Seattle",
  province: "Washington",
  propertyType: "Detached",
  geo_location: { type: "Point", coordinates: [-122.3488, 47.621] },
  bedrooms: 3,
  bathrooms: 2,
  squareFeet: 1750,
  yearBuilt: 2003,
  conditionScore: 4,
  latest_sale_price: { price: 910000, date: new Date("2026-03-01") },
  comparable_props: [],
};

describe("runPropertyValuation", () => {
  it("returns a published estimate when subject and comps are valid", () => {
    const output = runPropertyValuation({
      property: subject,
      valuation,
      compProperties: [comp],
    });

    expect(output).not.toBeNull();
    expect(output!.result.publishedEstimate).toBeGreaterThan(0);
    expect(output!.estimated_value.final_calculated_estimate).toBe(
      output!.result.publishedEstimate
    );
    expect(output!.comparables).toHaveLength(1);
  });

  it("builds subject and market rows from property docs", () => {
    expect(subjectFromPropertyDoc(subject, valuation)).not.toBeNull();
    expect(marketRecordFromPropertyDoc(comp)).not.toBeNull();
    expect(profileForProperty(subject).propertyType).toBe("Detached");
    expect(externalEstimateInputsFromValuation(valuation).policy).toBe(
      "Prefer External fallback"
    );
  });
});

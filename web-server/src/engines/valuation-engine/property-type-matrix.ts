const MATRIX: Record<string, Record<string, number>> = {
  Detached: { Detached: 1.0, "Semi-Detached": 0.7, Townhouse: 0.4, "Condo Townhouse": 0.25, "Condo Apartment": 0.1 },
  "Semi-Detached": { Detached: 0.7, "Semi-Detached": 1.0, Townhouse: 0.7, "Condo Townhouse": 0.35, "Condo Apartment": 0.1 },
  Townhouse: { Detached: 0.4, "Semi-Detached": 0.7, Townhouse: 1.0, "Condo Townhouse": 0.8, "Condo Apartment": 0.2 },
  "Condo Townhouse": { Detached: 0.25, "Semi-Detached": 0.35, Townhouse: 0.8, "Condo Townhouse": 1.0, "Condo Apartment": 0.45 },
  "Condo Apartment": { Detached: 0.1, "Semi-Detached": 0.1, Townhouse: 0.2, "Condo Townhouse": 0.45, "Condo Apartment": 1.0 },
};

export function getPropertyTypeMatch(subjectType: string, compType: string): number {
  return MATRIX[subjectType]?.[compType] ?? 0;
}

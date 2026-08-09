export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function safeDivide(numerator: number, denominator: number, fallback = 0): number {
  if (!denominator) return fallback;
  return numerator / denominator;
}

export function average(values: number[]): number {
  if (!values.length) return 0;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

export function median(values: number[]): number {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

export function haversineKm(lat1?: number, lon1?: number, lat2?: number, lon2?: number): number {
  if (lat1 == null || lon1 == null || lat2 == null || lon2 == null) return 999;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

export function normalizedMatch(a: number, b: number, tolerance: number): number {
  if (tolerance <= 0) return 0;
  return clamp(1 - Math.abs(a - b) / tolerance, 0, 1);
}

export function daysBetween(laterIso: string, earlierIso?: string | null): number {
  if (!earlierIso) return 999;
  const later = new Date(laterIso).getTime();
  const earlier = new Date(earlierIso).getTime();
  return Math.max(0, Math.round((later - earlier) / (1000 * 60 * 60 * 24)));
}

export function subtractDays(isoDate: string, days: number): string {
  const dt = new Date(isoDate);
  dt.setDate(dt.getDate() - days);
  return dt.toISOString().slice(0, 10);
}

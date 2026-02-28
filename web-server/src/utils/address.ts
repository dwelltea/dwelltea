const MAX_ADDRESS_LENGTH = 500;

/**
 * Normalize address for consistent lookup: trim, collapse whitespace, lowercase.
 */
export function normalizeAddress(address: string): string {
  if (!address || typeof address !== "string") {
    return "";
  }
  return address
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

export function isValidAddress(address: string): boolean {
  const normalized = normalizeAddress(address);
  return normalized.length > 0 && normalized.length <= MAX_ADDRESS_LENGTH;
}

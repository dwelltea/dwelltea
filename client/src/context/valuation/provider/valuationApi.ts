import type { ValuationResponse } from '../types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080';

export class ValuationApiError extends Error {
  readonly status: number;
  readonly code?: string;

  constructor(message: string, status: number, code?: string) {
    super(message);
    this.name = 'ValuationApiError';
    this.status = status;
    this.code = code;
  }
}

/**
 * Fetches valuation by address from the API.
 * @returns ValuationResponse on success
 * @throws ValuationApiError on non-OK response; throws on network error
 */
export async function getValuationByAddress(
  address: string
): Promise<ValuationResponse> {
  const encoded = encodeURIComponent(address);
  const res = await fetch(`${API_BASE}/api/valuation?address=${encoded}`);

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const message =
      (body as { error?: string })?.error ?? `Request failed (${res.status})`;
    const code = (body as { code?: string })?.code;
    throw new ValuationApiError(message, res.status, code);
  }

  const data: ValuationResponse = await res.json();
  return data;
}

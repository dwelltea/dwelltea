'use client';

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ValuationResponse } from './types';
import mockValuationServerDown from '@/data/mock-valuation-server-down.json';

interface ValuationState {
  data: ValuationResponse | null;
  loading: boolean;
  error: string | null;
  address: string | null;
  usedServerDownFallback: boolean;
}

interface ValuationContextValue extends ValuationState {
  fetchValuation: (address: string) => Promise<void>;
  setAddress: (address: string | null) => void;
  clearValuation: () => void;
}

const ValuationContext = createContext<ValuationContextValue | null>(null);

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080';

export function ValuationProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ValuationState>({
    data: null,
    loading: false,
    error: null,
    address: null,
    usedServerDownFallback: false,
  });

  const fetchValuation = useCallback(async (address: string) => {
    const trimmed = address?.trim();
    if (!trimmed) {
      setState((s) => ({ ...s, error: 'Address is required', data: null, usedServerDownFallback: false }));
      return;
    }
    setState((s) => ({ ...s, loading: true, error: null, address: trimmed, usedServerDownFallback: false }));
    try {
      const encoded = encodeURIComponent(trimmed);
      const res = await fetch(`${API_BASE}/api/valuation?address=${encoded}`);
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        const message = body?.error ?? `Request failed (${res.status})`;
        setState((s) => ({
          ...s,
          loading: false,
          error: message,
          data: null,
          usedServerDownFallback: false,
        }));
        return;
      }
      const data: ValuationResponse = await res.json();
      setState((s) => ({
        ...s,
        loading: false,
        error: null,
        data,
        usedServerDownFallback: false,
      }));
    } catch {
      setState((s) => ({
        ...s,
        loading: false,
        error: null,
        data: mockValuationServerDown as ValuationResponse,
        usedServerDownFallback: true,
      }));
    }
  }, []);

  const setAddress = useCallback((address: string | null) => {
    setState((s) => ({ ...s, address }));
  }, []);

  const clearValuation = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null,
      address: null,
      usedServerDownFallback: false,
    });
  }, []);

  const value = useMemo<ValuationContextValue>(
    () => ({
      ...state,
      fetchValuation,
      setAddress,
      clearValuation,
    }),
    [state, fetchValuation, setAddress, clearValuation]
  );

  return (
    <ValuationContext.Provider value={value}>
      {children}
    </ValuationContext.Provider>
  );
}

export function useValuation(): ValuationContextValue {
  const ctx = useContext(ValuationContext);
  if (!ctx) {
    throw new Error('useValuation must be used within ValuationProvider');
  }
  return ctx;
}

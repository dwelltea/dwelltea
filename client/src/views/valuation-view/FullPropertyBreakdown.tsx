'use client';

import React from 'react';
import { PropertyCard, Button } from '@/ui-kit';
import { useValuation } from '@/context';
import {
  BreakdownSection,
  BreakdownTitle,
  BreakdownDescription,
  ComparablePropertiesGrid,
  BreakdownButtonContainer,
} from './FullPropertyBreakdown.styles';

interface FullPropertyBreakdownProps {
  onExploreInsights?: () => void;
}

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop';

export function FullPropertyBreakdown({ onExploreInsights }: FullPropertyBreakdownProps) {
  const { data } = useValuation();
  const comparables = data?.comparables ?? [];

  return (
    <BreakdownSection>
      <BreakdownTitle>Details</BreakdownTitle>
      <BreakdownDescription>
        Valuation is based on the following comparable properties in your area.
      </BreakdownDescription>

      <ComparablePropertiesGrid>
        {comparables.map((comp) => {
          const rawValue =
            comp.latest_sale_price?.price ??
            comp.adj_values?.adj_latest_sale_price ??
            undefined;
          const value = rawValue != null ? Math.ceil(rawValue) : undefined;
          return (
            <PropertyCard
              key={comp.address}
              image={comp.imageUrl ?? DEFAULT_IMAGE}
              address={comp.address}
              beds={comp.bedrooms ?? 0}
              baths={comp.bathrooms ?? 0}
              year={comp.yearBuilt ?? 0}
              squareFeet={comp.squareFeet ?? 0}
              similarityScore={Math.round(comp.similarity_score)}
              value={value}
            />
          );
        })}
      </ComparablePropertiesGrid>

      <BreakdownButtonContainer>
        <Button variant="secondary" size="large" fullWidth onClick={onExploreInsights}>
          Explore Community Insights
        </Button>
      </BreakdownButtonContainer>
    </BreakdownSection>
  );
}


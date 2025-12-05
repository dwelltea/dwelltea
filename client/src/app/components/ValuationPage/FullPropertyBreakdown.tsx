'use client';

import React from 'react';
import { PropertyCard, Button } from '@/ui-library';
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

export function FullPropertyBreakdown({ onExploreInsights }: FullPropertyBreakdownProps) {
  return (
    <BreakdownSection>
      <BreakdownTitle>Details</BreakdownTitle>
      <BreakdownDescription>
        Valuation is based on the following comparable properties in your area.
      </BreakdownDescription>
      
      <ComparablePropertiesGrid>
        <PropertyCard
          image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop"
          address="123 Main Street"
          beds={4}
          baths={3}
          year={2008}
          squareFeet={1200}
          similarityScore={86}
          value={950000}
        />
        <PropertyCard
          image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
          address="472 Cedar Ln"
          beds={4}
          baths={3}
          year={2013}
          squareFeet={1200}
          similarityScore={88}
          value={950000}
        />
        <PropertyCard
          image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop"
          address="483 Pine St"
          beds={3}
          baths={2}
          year={2004}
          squareFeet={1200}
          similarityScore={82}
          value={950000}
        />
      </ComparablePropertiesGrid>

      <BreakdownButtonContainer>
        <Button variant="secondary" size="large" fullWidth onClick={onExploreInsights}>
          Explore Community Insights
        </Button>
      </BreakdownButtonContainer>
    </BreakdownSection>
  );
}


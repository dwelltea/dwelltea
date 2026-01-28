'use client';

import React from 'react';
import { Navigation } from './Navigation';
import { HeroSection } from './HeroSection';
import { FeatureBoxes } from './FeatureBoxes';
import { PageContainer } from './index.styles';

interface LandingPageProps {
  onSearchClick?: () => void;
  onHomeClick?: () => void;
}

export function LandingPage({ onSearchClick, onHomeClick }: LandingPageProps) {
  return (
    <PageContainer>
      <Navigation onSearchClick={onSearchClick} onHomeClick={onHomeClick} />
      <HeroSection />
      <FeatureBoxes />
    </PageContainer>
  );
}


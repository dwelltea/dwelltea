'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Lightbulb } from 'lucide-react';
import { Navigation } from '../LandingPage/Navigation';
import { FullPropertyBreakdown } from './FullPropertyBreakdown';
import { AnimatedText } from '../LandingPage/HeroSection/AnimatedText';
import { 
  Card, 
  ValueDisplay, 
  ConfidenceBar, 
  StatusBadge,
  StatCard,
  TrendCard,
  Accordion
} from '@/ui-library';
import {
  PageContainer,
  Section,
  Container,
  PropertyImageContainer,
  AddressDisplay,
  ValueSection,
  ValueRow,
  ValueContent,
  ConfidenceRange,
  ConfidenceBarContainer,
  AIInsightCard,
  AIInsightIcon,
  AIInsightTitle,
  MetricsGrid,
  MetricCard,
  MetricContent,
  MetricTitle,
  MetricValue,
} from './index.styles';

interface ValuationPageProps {
  address?: string;
  onHomeClick?: () => void;
  onSearchClick?: () => void;
}

export function ValuationPage({ address = '456 Lakewood Drive', onHomeClick, onSearchClick }: ValuationPageProps) {
  const router = useRouter();
  const displayAddress = address || '456 Lakewood Drive';

  const handleExploreInsights = () => {
    // Navigate to community insights page with encoded address
    const encodedAddress = encodeURIComponent(displayAddress);
    router.push(`/community/${encodedAddress}`);
  };

  return (
    <PageContainer>
      <Navigation onSearchClick={onSearchClick || onHomeClick} onHomeClick={onHomeClick} />
      <Section>
        <Container>
          {/* Property Image */}
          <PropertyImageContainer>
            <Image
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop"
              alt="Property exterior"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </PropertyImageContainer>

          {/* Address Display */}
          <AddressDisplay>{displayAddress}</AddressDisplay>

          {/* Estimated Value Section */}
          <ValueSection>
            <ValueRow>
              <ValueContent>
                <ValueDisplay value={950000} size="xlarge" />
                <ConfidenceRange>Confidence Range: $900,000 - $1.000M*</ConfidenceRange>
              </ValueContent>
              <ConfidenceBarContainer>
                <ConfidenceBar
                  segments={[
                    { label: 'Low', width: 20, active: false, highlighted: false },
                    { label: 'Medium', width: 30, active: true, highlighted: false },
                    { label: 'High', width: 50, active: true, highlighted: true },
                  ]}
                />
              </ConfidenceBarContainer>
            </ValueRow>
          </ValueSection>

          {/* AI Insight Section */}
          <Card variant="cream">
            <AIInsightCard>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <AIInsightIcon>
                  <Lightbulb size={28} />
                </AIInsightIcon>
                <div style={{ flex: 1 }}>
                  <AIInsightTitle>AI Insight</AIInsightTitle>
                  <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#374151', margin: 0 }}>
                    <AnimatedText 
                      text="The estimated value has remained stable amidst a balanced local market..." 
                      delay={30} 
                      startDelay={300} 
                    />
                  </p>
                </div>
              </div>
            </AIInsightCard>
          </Card>

          {/* Metrics Section */}
          <MetricsGrid>
            <MetricCard>
              <TrendCard
                title="Valuation Trend"
                period="3 yrs"
                trend="up"
                data={[
                  { x: 0, y: 750000 },
                  { x: 1, y: 780000 },
                  { x: 2, y: 820000 },
                  { x: 3, y: 850000 },
                  { x: 4, y: 900000 },
                  { x: 5, y: 950000 },
                ]}
              />
            </MetricCard>
            <MetricCard>
              <MetricContent>
                <MetricTitle>Similarity Score</MetricTitle>
                <MetricValue>85</MetricValue>
              </MetricContent>
            </MetricCard>
            <MetricCard>
              <MetricContent>
                <MetricTitle>Market Temperature</MetricTitle>
                <StatusBadge status="hot" size="large" />
              </MetricContent>
            </MetricCard>
          </MetricsGrid>

          {/* Full Property Breakdown Accordion */}
          <Accordion title="View Full Breakdown" defaultOpen={true}>
            <FullPropertyBreakdown onExploreInsights={handleExploreInsights} />
          </Accordion>
        </Container>
      </Section>
    </PageContainer>
  );
}


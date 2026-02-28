'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Lightbulb } from 'lucide-react';
import { useValuation } from '@/context';
import { Navigation } from '../landing-view/Navigation';
import { FullPropertyBreakdown } from './FullPropertyBreakdown';
import { AnimatedText } from '@/ui-kit';
import {
  Card,
  ValueDisplay,
  ConfidenceBar,
  StatusBadge,
  TrendCard,
  Accordion,
} from '@/ui-kit';
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

function formatConfidence(min?: number, max?: number): string {
  if (min == null || max == null) return '';
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.ceil(max);
  const fmt = (n: number) =>
    n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(2)}M` : `$${n.toLocaleString()}`;
  return `Confidence Range: ${fmt(roundedMin)} - ${fmt(roundedMax)}*`;
}

export function ValuationPage({
  address: addressProp,
  onHomeClick,
  onSearchClick,
}: ValuationPageProps) {
  const router = useRouter();
  const { data, loading, error, fetchValuation, usedServerDownFallback } = useValuation();
  const displayAddress = addressProp?.trim() || data?.property?.address || '';

  useEffect(() => {
    if (addressProp?.trim()) {
      fetchValuation(addressProp.trim());
    }
  }, [addressProp, fetchValuation]);

  const handleExploreInsights = () => {
    const encodedAddress = encodeURIComponent(displayAddress);
    router.push(`/community/${encodedAddress}`);
  };

  const valuation = data?.valuation;
  const property = data?.property;
  const mainValue = valuation?.estimated_value?.final_calculated_estimate != null
    ? Math.ceil(valuation.estimated_value.final_calculated_estimate)
    : undefined;
  const confidenceMin = valuation?.confidenceMin != null ? Math.ceil(valuation.confidenceMin) : undefined;
  const confidenceMax = valuation?.confidenceMax != null ? Math.ceil(valuation.confidenceMax) : undefined;
  const accuracy = valuation?.accuracy ?? 'medium';
  const aiInsight = valuation?.aiInsight ?? '';
  const trendData = valuation?.trendData ?? [];
  const overallSimilarity = valuation?.overallSimilarityScore;
  const marketTempRaw = valuation?.marketTemperature?.toLowerCase() ?? 'neutral';
  const marketTemp: 'hot' | 'warm' | 'cold' | 'neutral' =
    marketTempRaw === 'hot' ? 'hot' : marketTempRaw === 'cold' ? 'cold' : marketTempRaw === 'warm' ? 'warm' : 'neutral';
  const imageUrl = property?.imageUrl ?? 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop';

  if (loading && !data) {
    return (
      <PageContainer>
        <Navigation onSearchClick={onSearchClick || onHomeClick} onHomeClick={onHomeClick} />
        <Section>
          <Container>
            <AddressDisplay>{displayAddress || 'Loading...'}</AddressDisplay>
            <p style={{ color: '#6b7280' }}>Loading valuation...</p>
          </Container>
        </Section>
      </PageContainer>
    );
  }

  if (error && !data) {
    return (
      <PageContainer>
        <Navigation onSearchClick={onSearchClick || onHomeClick} onHomeClick={onHomeClick} />
        <Section>
          <Container>
            <AddressDisplay>{displayAddress}</AddressDisplay>
            <p style={{ color: '#dc2626' }}>{error}</p>
          </Container>
        </Section>
      </PageContainer>
    );
  }

  const confidenceSegments =
    accuracy === 'low'
      ? [{ label: 'Low', width: 50, active: true, highlighted: true }, { label: 'Medium', width: 30, active: false, highlighted: false }, { label: 'High', width: 20, active: false, highlighted: false }]
      : accuracy === 'high'
        ? [{ label: 'Low', width: 20, active: false, highlighted: false }, { label: 'Medium', width: 30, active: true, highlighted: false }, { label: 'High', width: 50, active: true, highlighted: true }]
        : [{ label: 'Low', width: 20, active: false, highlighted: false }, { label: 'Medium', width: 30, active: true, highlighted: true }, { label: 'High', width: 50, active: true, highlighted: false }];

  return (
    <PageContainer>
      <Navigation onSearchClick={onSearchClick || onHomeClick} onHomeClick={onHomeClick} />
      <Section>
        <Container>
          {usedServerDownFallback && (
            <div
              style={{
                padding: '12px 16px',
                backgroundColor: '#fef3c7',
                border: '1px solid #f59e0b',
                borderRadius: '8px',
                color: '#92400e',
                fontSize: '14px',
              }}
            >
              Server unavailable — showing demo data for 124 Server-Down St.
            </div>
          )}
          <PropertyImageContainer>
            <Image
              src={imageUrl}
              alt="Property exterior"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </PropertyImageContainer>

          <AddressDisplay>{displayAddress}</AddressDisplay>

          <ValueSection>
            <ValueRow>
              <ValueContent>
                <ValueDisplay value={mainValue ?? 0} size="xlarge" />
                <ConfidenceRange>{formatConfidence(confidenceMin, confidenceMax)}</ConfidenceRange>
              </ValueContent>
              <ConfidenceBarContainer>
                <ConfidenceBar segments={confidenceSegments} />
              </ConfidenceBarContainer>
            </ValueRow>
          </ValueSection>

          <Card variant="cream">
            <AIInsightCard>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <AIInsightIcon>
                  <Lightbulb size={28} />
                </AIInsightIcon>
                <div style={{ flex: 1 }}>
                  <AIInsightTitle>AI Insight</AIInsightTitle>
                  <div style={{ fontSize: '16px', lineHeight: '1.5', color: '#374151', margin: 0 }}>
                    <AnimatedText text={aiInsight || 'No insight available.'} delay={30} startDelay={300} />
                  </div>
                </div>
              </div>
            </AIInsightCard>
          </Card>

          <MetricsGrid>
            <MetricCard>
              <TrendCard
                title="Valuation Trend"
                period="3 yrs"
                trend="up"
                data={
                trendData.length >= 2
                  ? trendData.map((d) => ({ x: d.x, y: Math.ceil(d.y) }))
                  : [{ x: 0, y: mainValue ?? 0 }, { x: 5, y: mainValue ?? 0 }]
              }
              />
            </MetricCard>
            <MetricCard>
              <MetricContent>
                <MetricTitle>Similarity Score</MetricTitle>
                <MetricValue>{overallSimilarity ?? '—'}</MetricValue>
              </MetricContent>
            </MetricCard>
            <MetricCard>
              <MetricContent>
                <MetricTitle>Market Temperature</MetricTitle>
                <StatusBadge status={marketTemp} size="large" />
              </MetricContent>
            </MetricCard>
          </MetricsGrid>

          <Accordion title="View Full Breakdown" defaultOpen={true}>
            <FullPropertyBreakdown onExploreInsights={handleExploreInsights} />
          </Accordion>
        </Container>
      </Section>
    </PageContainer>
  );
}


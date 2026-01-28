'use client';

import React from 'react';
import { 
  Card,
  AIInsightCard, 
  HighlightItem, 
  StatCard, 
  TrendCard, 
  Button 
} from '@/ui-kit';
import { Navigation } from '../landing-view/Navigation';
import {
  GraduationCap,
  Sprout,
  Home,
  Building,
  TrendingUp,
  ArrowUp,
} from 'lucide-react';
import {
  PageContainer,
  Section,
  Container,
  PageTitle,
  SectionTitle,
  HighlightsList,
  TwoColumnSection,
  ColumnWrapper,
  MetricsSection,
  MetricsGrid,
  StatsContainer,
  TrendContainer,
  CTAButtonContainer,
} from './index.styles';

interface CommunityInsightsPageProps {
  address?: string;
  onHomeClick?: () => void;
  onSearchClick?: () => void;
}

export function CommunityInsightsPage({ 
  address = 'Orleans - Fallingbrook',
  onHomeClick,
  onSearchClick 
}: CommunityInsightsPageProps) {
  // Sample data for the trend chart
  const trendData = [
    { x: 0, y: 450 },
    { x: 1, y: 470 },
    { x: 2, y: 490 },
    { x: 3, y: 510 },
    { x: 4, y: 520 },
    { x: 5, y: 540 },
  ];

  return (
    <PageContainer>
      <Navigation onSearchClick={onSearchClick} onHomeClick={onHomeClick} />
      
      <Section>
        <Container>
          {/* Page Title */}
          <PageTitle>Community Insights for {address}</PageTitle>

          {/* AI Insight Section */}
          <AIInsightCard
            insightText="Fallingbrook continues to show moderate growth driven by strong school ratings and new commercial development along Tenth Line Road. Homes here remain in high demand compared to nearby neighbourhoods..."
            imageSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop"
            imageAlt="Happy community members"
          />

          {/* School Highlights and Development Activity Sections */}
          <TwoColumnSection>
            <ColumnWrapper>
              <SectionTitle>School Highlights</SectionTitle>
              <HighlightsList>
                <Card>
                  <HighlightItem icon={<GraduationCap size={28} />}>
                    <strong>Top-rated Schools (8.2/10)</strong>
                    <br />
                    Xavier High School (7.9/10)
                  </HighlightItem>
                </Card>
                <Card>
                  <HighlightItem icon={<Sprout size={28} />}>
                    French Immersion, STEM
                  </HighlightItem>
                </Card>
                <Card>
                  <HighlightItem icon={<Home size={28} />}>
                    Homes near top schools sell 4-7% above neighbourhood
                  </HighlightItem>
                </Card>
              </HighlightsList>
            </ColumnWrapper>

            <ColumnWrapper>
              <SectionTitle>Development Activity</SectionTitle>
              <HighlightsList>
                <Card>
                  <HighlightItem icon={<Building size={28} />}>
                    Mixed-use plaza expansion on Tenth Line
                  </HighlightItem>
                </Card>
                <Card>
                  <HighlightItem icon={<TrendingUp size={28} />}>
                    Zoning approvals increasing year-year
                  </HighlightItem>
                </Card>
                <Card>
                  <HighlightItem icon={<ArrowUp size={28} />}>
                    Strong upward pressure expected over the 1-24 months
                  </HighlightItem>
                </Card>
              </HighlightsList>
            </ColumnWrapper>
          </TwoColumnSection>

          {/* Median List Price Section */}
          <div>
            <SectionTitle>Median List Price (3 yrs)</SectionTitle>
            <Card>
                <MetricsSection>
                <MetricsGrid>
                    <StatsContainer>
                    <StatCard value={58} label="Homes for sale" />
                    <StatCard value={123} label="Homes Sold" />
                    <StatCard value={18} label="Days on market" />
                    </StatsContainer>
                    <TrendContainer>
                    <TrendCard
                        title="Median List Price"
                        data={trendData}
                        trend="up"
                        period="3 yrs"
                    />
                    </TrendContainer>
                </MetricsGrid>
                </MetricsSection>
            </Card>
          </div>
          {/* Call to Action */}
          <CTAButtonContainer>
            <Button variant="primary" size="large" fullWidth>
              Connect to the Community
            </Button>
          </CTAButtonContainer>
        </Container>
      </Section>
    </PageContainer>
  );
}

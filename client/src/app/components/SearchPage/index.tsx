'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation } from '../LandingPage/Navigation';
import { AddressSearch } from '@/ui-library/molecules/AddressSearch';
import { CoupleImage } from '../shared/CoupleImage';
import {
  PageContainer,
  Section,
  Container,
  Grid,
  LeftContent,
  Title,
  RightContent,
} from './index.styles';

interface SearchPageProps {
  onClose?: () => void;
}

export function SearchPage({ onClose }: SearchPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (value: string) => {
    // Navigate to valuation page if "any address" is searched
    if (value.toLowerCase().trim() === 'any address') {
      router.push('/value/any-address');
    } else {
      // TODO: Implement actual search logic for other addresses
      console.log('Searching for:', value);
    }
  };

  return (
    <PageContainer>
      <Navigation onSearchClick={onClose} onHomeClick={onClose} />
      <Section>
        <Container>
          <Grid>
            <LeftContent>
              <Title>
                Discover your home's true value.
              </Title>
              <AddressSearch
                value={searchQuery}
                onChange={setSearchQuery}
                onSubmit={handleSubmit}
                placeholder="Enter an address"
                className="w-full"
              />
            </LeftContent>
            <RightContent>
              <CoupleImage />
            </RightContent>
          </Grid>
        </Container>
      </Section>
    </PageContainer>
  );
}


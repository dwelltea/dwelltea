'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation } from '../landing-view/Navigation';
import { AddressSearch } from '@/ui-kit/molecules/AddressSearch';
import { CoupleImage } from '@/ui-kit';
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
    const trimmed = value?.trim();
    if (!trimmed) return;
    const encoded = encodeURIComponent(trimmed);
    router.push(`/value/${encoded}`);
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


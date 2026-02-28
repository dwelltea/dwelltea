'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AddressSearch } from '@/ui-kit/molecules/AddressSearch';
import { CoupleImage } from '@/ui-kit';
import { AnimatedText } from '@/ui-kit';
import {
  Section,
  Container,
  Grid,
  LeftContent,
  Heading,
  Description,
} from './index.styles';

export function HeroSection() {
  const [address, setAddress] = useState('');
  const router = useRouter();

  const handleSubmit = (value: string) => {
    const trimmed = value?.trim();
    if (!trimmed) return;
    const encoded = encodeURIComponent(trimmed);
    router.push(`/value/${encoded}`);
  };

  return (
    <Section>
      <Container>
        <Grid>
          <LeftContent>
            <Heading>
              <AnimatedText 
                text={`Real Connections.
Real Insights.
Real Estate.`}
                delay={50}
                startDelay={200}
              />
            </Heading>
            <Description>
              Find your property's true value and understand what really drives it.
            </Description>
            <AddressSearch
              value={address}
              onChange={setAddress}
              onSubmit={handleSubmit}
              placeholder="Enter an address to get started."
              autoFocus={true}
            />
          </LeftContent>
          <CoupleImage />
        </Grid>
      </Container>
    </Section>
  );
}


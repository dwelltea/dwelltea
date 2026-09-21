'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AddressSearch } from '@/ui-kit/molecules/AddressSearch';
import { AnimatedText } from '@/ui-kit';
import { LivingVisual } from './LivingVisual';
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
                text={`Real Pathways.
Real Insights.
Real Estate.`}
                delay={50}
                startDelay={200}
              />
            </Heading>
            <Description>
            Understand your housing options, and move forward with greater clarity.
            </Description>
            <AddressSearch
              value={address}
              onChange={setAddress}
              onSubmit={handleSubmit}
              placeholder="Enter an address to get started."
              autoFocus={true}
            />
          </LeftContent>
          <LivingVisual />
        </Grid>
      </Container>
    </Section>
  );
}


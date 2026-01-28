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
    // Navigate to valuation page if "any address" is searched
    if (value.toLowerCase().trim() === 'any address') {
      router.push('/value/any-address');
    } else {
      // Handle other address submissions
      console.log('Address submitted:', value);
    }
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


'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { CircleDollarSign, Lightbulb, MapPinned } from 'lucide-react';
import {
  Section,
  Container,
  Grid,
  IconContainer,
  Title,
  Description,
  StyledCard,
  CardContent,
} from './index.styles';

export function FeatureBoxes() {
  const router = useRouter();

  const features = [
    {
      icon: (
        <IconContainer>
          <CircleDollarSign size={40} style={{ color: '#c4941f' }} />
        </IconContainer>
      ),
      title: 'Accurate Valuations',
      description: 'Instant estimates based on real-time data.',
      onClick: undefined,
    },
    {
      icon: (
        <IconContainer>
          <Lightbulb size={40} style={{ color: '#c4941f' }} />
        </IconContainer>
      ),
      title: 'AI-Powered Insights',
      description: 'Understand factors influencing your home\'s worth.',
      onClick: () => {
        router.push('/value/any-address');
      },
    },
    {
      icon: (
        <IconContainer>
          <MapPinned size={40} style={{ color: '#c4941f' }} />
        </IconContainer>
      ),
      title: 'Neighbourhood Intelligence',
      description: 'Key information on what\'s happening nearby.',
      onClick: () => {
        router.push('/community/any-address');
      },
    },
  ];

  return (
    <Section>
      <Container>
        <Grid>
          {features.map((feature, index) => (
            <StyledCard 
              key={index} 
              variant="default"
              onClick={feature.onClick}
            >
              <CardContent>
                {feature.icon}
                <Title>{feature.title}</Title>
                <Description>{feature.description}</Description>
              </CardContent>
            </StyledCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}


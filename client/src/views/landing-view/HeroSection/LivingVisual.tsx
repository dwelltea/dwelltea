'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

type Scene = {
  image: string;
  alt: string;
  caption: string;
};

const scenes: Scene[] = [
  {
    image: '/assets/landing/home-life.png',
    alt: 'Household discussing plans at a kitchen table',
    caption: 'Start with what matters. The right path follows.',
  },
  {
    image: '/assets/landing/renovation.png',
    alt: 'A home being renovated with an open-plan extension',
    caption: 'Consider the opportunity—and the tradeoffs.',
  },
  {
    image: '/assets/landing/next-home.png',
    alt: 'A welcoming family home in a residential neighbourhood',
    caption: 'Realistic options. Visible assumptions. Practical next steps.',
  },
  {
    image: '/assets/landing/outcome-city.png',
    alt: 'Couple enjoying relaxed city living from their home',
    caption: 'A calmer decision can lead to a more settled life.',
  },
];

const reveal = keyframes`
  from {
    opacity: 0.5;
    transform: scale(1.03);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Frame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  min-height: 400px;
  max-width: 100%;
  overflow: hidden;
  border-radius: 2rem;
  background: #17382f;
  box-shadow: 0 30px 90px rgba(22, 53, 44, 0.18);
`;

const Photo = styled.div`
  position: absolute;
  inset: 0;

  img {
    animation: ${reveal} 0.5s ease-out;
  }
`;

const Gradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    #102c24 0%,
    rgba(16, 44, 36, 0.2) 45%,
    transparent 100%
  );
  pointer-events: none;
`;

const CaptionBlock = styled.div`
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  z-index: 1;
  padding: 1.75rem;
  color: #ffffff;

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

const Caption = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.4;
  color: #ffffff;
`;

const Dots = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1.75rem;
`;

const DotButton = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  height: 1.5rem;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid #f3c973;
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

const Dot = styled.span<{ $active: boolean }>`
  display: block;
  width: 100%;
  height: 0.375rem;
  border-radius: 999px;
  background: ${({ $active }) => ($active ? '#f3c973' : 'rgba(255, 255, 255, 0.35)')};
  transition: background 0.2s ease;
`;

export function LivingVisual() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const autoAdvancesRef = useRef(0);
  const scene = scenes[active];

  useEffect(() => {
    if (paused) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const timer = window.setInterval(() => {
      autoAdvancesRef.current += 1;
      setActive((current) => (current + 1) % scenes.length);
      if (autoAdvancesRef.current >= scenes.length) {
        setPaused(true);
      }
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <Frame
      aria-roledescription="carousel"
      aria-label="Home stories"
    >
      <Photo key={scene.image}>
        <Image
          src={scene.image}
          alt={scene.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
          priority={active === 0}
          quality={85}
        />
      </Photo>
      <Gradient />
      <CaptionBlock>
        <Caption>{scene.caption}</Caption>
        <Dots>
          {scenes.map((item, index) => (
            <DotButton
              key={item.image}
              type="button"
              onClick={() => {
                setActive(index);
                setPaused(true);
              }}
              aria-label={`Show story: ${item.caption}`}
              aria-pressed={index === active}
            >
              <Dot $active={index === active} />
            </DotButton>
          ))}
        </Dots>
      </CaptionBlock>
    </Frame>
  );
}

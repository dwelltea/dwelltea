'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { ValueDisplay } from '../../atoms/ValueDisplay';

export interface PropertyCardProps {
  image: string;
  address?: string;
  beds: number;
  baths: number;
  year: number;
  squareFeet: number;
  similarityScore: number;
  value?: number;
  showValue?: boolean;
  isPrimary?: boolean;
  className?: string;
}

const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #c4941f;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  background-color: #e5e7eb;
  overflow: hidden;
  
  img {
    transition: opacity 0.3s ease;
    will-change: opacity;
  }
`;

// Global cache to track if images have been loaded
const imageCache = new Map<string, boolean>();

const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SimilarityLabel = styled.p`
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6b7280;
  margin: 0;
`;

const Address = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #111827;
  margin: 0;
`;

const AddressRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const SquareFeet = styled.span`
  font-size: 14px;
  color: #4b5563;
  white-space: nowrap;
`;

const ValueContainer = styled.div`
  margin: 0;
  
  /* Adjust ValueDisplay size for card context */
  div {
    font-size: 32px !important;
    line-height: 1.2 !important;
    
    @media (max-width: 768px) {
      font-size: 24px !important;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e7eb;
  margin: 4px 0;
`;

const PropertyDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

const PropertyDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  color: #4b5563;
  flex: 1;
`;

const ScoreBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5dc;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  
  span {
    font-size: 18px;
    font-weight: 600;
    color: #111827;
    line-height: 1;
  }
`;

export const PropertyCard: React.FC<PropertyCardProps> = React.memo(({
  image,
  address,
  beds,
  baths,
  year,
  squareFeet,
  similarityScore,
  value,
  showValue,
  isPrimary,
  className = '',
}) => {
  // Determine if we should show value (primary card or explicit showValue flag)
  const shouldShowValue = (showValue || isPrimary) && value !== undefined;
  const displayAddress = address || '';
  const imageAlt = displayAddress || 'Property';
  
  const [imageLoaded, setImageLoaded] = useState(() => imageCache.get(image) || false);

  useEffect(() => {
    // If image was already loaded, mark it as loaded immediately
    if (imageCache.get(image)) {
      setImageLoaded(true);
    }
  }, [image]);

  const handleLoad = () => {
    imageCache.set(image, true);
    setImageLoaded(true);
  };

  return (
    <CardContainer className={className}>
      <ImageContainer>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
          onLoad={handleLoad}
          loading="lazy"
        />
      </ImageContainer>
      <CardContent>
        {value !== undefined ? (
          <>
            {displayAddress && (
              <Address>{displayAddress}</Address>
            )}
            <AddressRow>
              <ValueContainer>
                <ValueDisplay value={value} size="large" />
              </ValueContainer>
              <SquareFeet>{squareFeet || 0} sq ft.</SquareFeet>
            </AddressRow>
          </>
        ) : (
          <AddressRow>
            <Address>{displayAddress}</Address>
            <SquareFeet>{squareFeet || 0} sq ft.</SquareFeet>
          </AddressRow>
        )}
        <Divider />
        <PropertyDetailsContainer>
          <PropertyDetails>
            <span>{beds} bd, {baths} ba</span>
            <span>{year}</span>
          </PropertyDetails>
          <ScoreBadge>
            <span>{similarityScore}</span>
          </ScoreBadge>
        </PropertyDetailsContainer>
      </CardContent>
    </CardContainer>
  );
});

PropertyCard.displayName = 'PropertyCard';



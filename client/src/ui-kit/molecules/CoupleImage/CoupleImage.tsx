'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 8px;
  overflow: hidden;
  background: none;
  background-color: transparent;
  min-height: 400px;
  max-width: 100%;
  contain: layout style paint;
  
  img {
    transition: opacity 0.3s ease;
    will-change: opacity;
    background: none;
    background-color: transparent;
  }
`;

const Skeleton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
  
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

// Global cache to track if image has been loaded
const imageCache = new Map<string, boolean>();

export const CoupleImage = React.memo(() => {
  const imageSrc = '/assets/logos/couple2.png';
  const [imageLoaded, setImageLoaded] = useState(() => imageCache.get(imageSrc) || false);

  useEffect(() => {
    // If image was already loaded, mark it as loaded immediately
    if (imageCache.get(imageSrc)) {
      setImageLoaded(true);
    }
  }, [imageSrc]);

  const handleLoad = () => {
    imageCache.set(imageSrc, true);
    setImageLoaded(true);
  };

  return (
    <ImageContainer>
      {!imageLoaded && <Skeleton />}
      <Image
        src={imageSrc}
        alt="Happy couple representing real estate connections"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ 
          objectFit: 'cover',
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
          zIndex: imageLoaded ? 1 : 0,
          backgroundColor: 'transparent',
        }}
        priority
        quality={90}
        onLoad={handleLoad}
      />
    </ImageContainer>
  );
});

CoupleImage.displayName = 'CoupleImage';

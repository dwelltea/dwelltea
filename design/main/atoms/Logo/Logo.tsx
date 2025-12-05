'use client';

import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'icon';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'white';
  className?: string;
}

export function Logo({
  variant = 'horizontal',
  size = 'medium',
  color = 'primary',
  className = ''
}: LogoProps) {
  const sizes = {
    small: { icon: 24, text: 'text-lg' },
    medium: { icon: 32, text: 'text-2xl' },
    large: { icon: 48, text: 'text-4xl' }
  };
  
  const colors = {
    primary: 'var(--green-700)',
    white: '#ffffff'
  };
  
  const fillColor = colors[color];
  const iconSize = sizes[size].icon;
  
  // Use the actual logo image file
  const logoSrc = '/assets/logos/logo.png';
  
  // For white variant, use CSS filter to invert colors
  const logoStyle: React.CSSProperties = {
    objectFit: 'contain',
    display: 'block',
    filter: color === 'white' ? 'brightness(0) invert(1)' : 'none',
    flexShrink: 0
  };
  
  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img
          src={logoSrc}
          alt="Dwelltea"
          width={iconSize}
          height={iconSize}
          style={logoStyle}
        />
      </div>
    );
  }
  
  return (
    <div className={`inline-flex items-center justify-center gap-0 ${className}`}>
      <img
        src={logoSrc}
        alt="Dwelltea"
        width={iconSize}
        height={iconSize}
        style={logoStyle}
      />
      <span 
        className={`${sizes[size].text} font-bold tracking-tight`}
        style={{ color: fillColor }}
      >
        Dwelltea
      </span>
    </div>
  );
}


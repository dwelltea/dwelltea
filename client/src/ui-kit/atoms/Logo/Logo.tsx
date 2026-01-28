import React from 'react';
import styled from 'styled-components';

export interface LogoProps {
  variant?: 'horizontal' | 'icon';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'white';
  className?: string;
}

const sizes = {
  small: { icon: 24, text: '18px' },
  medium: { icon: 32, text: '24px' },
  large: { icon: 48, text: '36px' },
};

const colors = {
  primary: '#1a3d2e',
  white: '#ffffff',
};

const LogoContainer = styled.div<{ $variant: 'horizontal' | 'icon' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $variant }) => ($variant === 'horizontal' ? '4px' : '0')};
  min-width: 0;
  max-width: 100%;
`;

const LogoText = styled.span<{ $size: string; $color: string }>`
  font-size: ${({ $size }) => $size};
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${({ $color }) => $color};
  white-space: nowrap;
  flex-shrink: 0;
`;

const LogoImage = styled.img<{ $size: number; $isWhite: boolean }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  min-width: ${({ $size }) => $size}px;
  min-height: ${({ $size }) => $size}px;
  max-width: ${({ $size }) => $size}px;
  max-height: ${({ $size }) => $size}px;
  object-fit: contain;
  display: block;
  flex-shrink: 0;
  filter: ${({ $isWhite }) => $isWhite ? 'brightness(0) invert(1)' : 'none'};
`;

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  size = 'medium',
  color = 'primary',
  className = '',
}) => {
  const fillColor = colors[color];
  const iconSize = sizes[size].icon;
  const textSize = sizes[size].text;

  // Use the actual logo image file
  const logoSrc = '/assets/logos/logo.png';

  if (variant === 'icon') {
    return (
      <LogoContainer $variant="icon" className={className}>
        <LogoImage 
          src={logoSrc} 
          alt="Dwelltea" 
          width={iconSize}
          height={iconSize}
          $size={iconSize}
          $isWhite={color === 'white'}
          loading="eager"
        />
      </LogoContainer>
    );
  }

  return (
    <LogoContainer $variant="horizontal" className={className}>
      <LogoImage 
        src={logoSrc} 
        alt="Dwelltea" 
        width={iconSize}
        height={iconSize}
        $size={iconSize}
        $isWhite={color === 'white'}
        loading="eager"
      />
      <LogoText $size={textSize} $color={fillColor}>
        Dwelltea
      </LogoText>
    </LogoContainer>
  );
};


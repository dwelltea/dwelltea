import React from 'react';
import styled from 'styled-components';

export interface IconBadgeProps {
  children: React.ReactNode;
  variant?: 'ai' | 'default' | 'custom';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const BadgeContainer = styled.div<{ 
  $variant: 'ai' | 'default' | 'custom';
  $size: 'small' | 'medium' | 'large';
  $customColor?: string;
}>`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #ffffff;
  
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return 'width: 32px; height: 32px; font-size: 12px;';
      case 'medium':
        return 'width: 40px; height: 40px; font-size: 14px;';
      case 'large':
        return 'width: 48px; height: 48px; font-size: 16px;';
      default:
        return 'width: 40px; height: 40px; font-size: 14px;';
    }
  }}
  
  ${({ $variant, $customColor }) => {
    if ($variant === 'custom' && $customColor) {
      return `background-color: ${$customColor};`;
    }
    switch ($variant) {
      case 'ai':
        return 'background-color: #f97316;';
      case 'default':
        return 'background-color: #1a3d2e;';
      default:
        return 'background-color: #1a3d2e;';
    }
  }}
`;

export const IconBadge: React.FC<IconBadgeProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  color,
  className = '',
}) => {
  return (
    <BadgeContainer
      $variant={variant}
      $size={size}
      $customColor={variant === 'custom' ? color : undefined}
      className={className}
    >
      {children}
    </BadgeContainer>
  );
};


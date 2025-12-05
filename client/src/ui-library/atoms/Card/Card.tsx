import React from 'react';
import styled from 'styled-components';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'cream';
  className?: string;
}

const StyledCard = styled.div<{ $variant: 'default' | 'cream' }>`
  background-color: ${({ $variant }) => ($variant === 'cream' ? '#faf8f3' : '#ffffff')};
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e5e7eb;
  
  @media (min-width: 768px) {
    padding: 32px;
  }
`;

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  return (
    <StyledCard $variant={variant} className={className}>
      {children}
    </StyledCard>
  );
};


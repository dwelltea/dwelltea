import React from 'react';
import styled from 'styled-components';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'cream';
  className?: string;
  onClick?: () => void;
}

const StyledCard = styled.div<{ $variant: 'default' | 'cream' }>`
  background-color: ${({ $variant }) => ($variant === 'cream' ? '#faf8f3' : '#ffffff')};
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  padding: 32px;
`;

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
}) => {
  return (
    <StyledCard $variant={variant} className={className} onClick={onClick}>
      {children}
    </StyledCard>
  );
};


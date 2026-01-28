import React from 'react';
import styled from 'styled-components';

export interface ValueDisplayProps {
  value: string | number;
  currency?: string;
  size?: 'large' | 'xlarge' | 'xxlarge';
  className?: string;
}

const ValueContainer = styled.div<{ $size: 'large' | 'xlarge' | 'xxlarge' }>`
  font-weight: 700;
  color: #111827;
  display: flex;
  align-items: baseline;
  
  ${({ $size }) => {
    switch ($size) {
      case 'large':
        return 'font-size: 48px; line-height: 1;';
      case 'xlarge':
        return 'font-size: 64px; line-height: 1;';
      case 'xxlarge':
        return 'font-size: 80px; line-height: 1;';
      default:
        return 'font-size: 64px; line-height: 1;';
    }
  }}
`;

const CurrencySymbol = styled.span`
  color: #4b5563;
  margin-right: 4px;
`;

const ValueText = styled.span`
  color: #111827;
`;

export const ValueDisplay: React.FC<ValueDisplayProps> = ({
  value,
  currency = '$',
  size = 'xlarge',
  className = '',
}) => {
  const formatValue = (val: string | number): string => {
    if (typeof val === 'number') {
      return val.toLocaleString('en-US');
    }
    return val;
  };

  return (
    <ValueContainer $size={size} className={className}>
      <CurrencySymbol>{currency}</CurrencySymbol>
      <ValueText>{formatValue(value)}</ValueText>
    </ValueContainer>
  );
};


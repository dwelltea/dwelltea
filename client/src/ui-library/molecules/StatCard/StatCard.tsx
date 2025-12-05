import React from 'react';
import styled from 'styled-components';

export interface StatCardProps {
  value: string | number;
  label: string;
  className?: string;
}

const StatContainer = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 56px;
  font-weight: 700;
  line-height: 1;
  color: #111827;
  margin-bottom: 8px;
  
  @media (max-width: 767px) {
    font-size: 40px;
  }
`;

const StatLabel = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #4b5563;
`;

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  className = '',
}) => {
  return (
    <StatContainer className={className}>
      <StatValue>{value}</StatValue>
      <StatLabel>{label}</StatLabel>
    </StatContainer>
  );
};



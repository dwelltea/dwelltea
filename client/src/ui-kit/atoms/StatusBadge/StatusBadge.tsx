import React from 'react';
import styled from 'styled-components';

export interface StatusBadgeProps {
  status: 'hot' | 'warm' | 'cold' | 'neutral';
  label?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const statusLabels = {
  hot: 'Hot',
  warm: 'Warm',
  cold: 'Cold',
  neutral: 'Neutral',
};

const StatusText = styled.div<{ $status: 'hot' | 'warm' | 'cold' | 'neutral'; $size: 'small' | 'medium' | 'large' }>`
  font-weight: 700;
  
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return 'font-size: 14px; line-height: 1.5;';
      case 'medium':
        return 'font-size: 16px; line-height: 1.5;';
      case 'large':
        return 'font-size: 32px; line-height: 1.2;';
      default:
        return 'font-size: 16px; line-height: 1.5;';
    }
  }}
  
  ${({ $status }) => {
    switch ($status) {
      case 'hot':
        return 'color: #ea580c;';
      case 'warm':
        return 'color: #ca8a04;';
      case 'cold':
        return 'color: #2563eb;';
      case 'neutral':
        return 'color: #4b5563;';
      default:
        return 'color: #4b5563;';
    }
  }}
`;

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  size = 'large',
  className = '',
}) => {
  const displayLabel = label || statusLabels[status];

  return (
    <StatusText $status={status} $size={size} className={className}>
      {displayLabel}
    </StatusText>
  );
};


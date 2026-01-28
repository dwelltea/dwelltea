import React from 'react';
import styled from 'styled-components';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'success' | 'error' | 'warning';
  size?: 'small' | 'medium';
}

const StyledBadge = styled.span<{ variant: string; size: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: 500;
  white-space: nowrap;
  
  ${({ size }) => {
    switch (size) {
      case 'small':
        return 'padding: 2px 8px; font-size: 12px;';
      case 'medium':
        return 'padding: 4px 12px; font-size: 14px;';
      default:
        return 'padding: 4px 12px; font-size: 14px;';
    }
  }}
  
  ${({ variant }) => {
    switch (variant) {
      case 'default':
        return `
          background-color: #1a3d2e;
          color: #ffffff;
        `;
      case 'secondary':
        return `
          background-color: #f3f4f6;
          color: #1f2937;
        `;
      case 'success':
        return `
          background-color: #dcfce7;
          color: #15803d;
        `;
      case 'error':
        return `
          background-color: #fee2e2;
          color: #b91c1c;
        `;
      case 'warning':
        return `
          background-color: #ffedd5;
          color: #c2410c;
        `;
      default:
        return `
          background-color: #1a3d2e;
          color: #ffffff;
        `;
    }
  }}
`;

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  className = '',
  ...props
}) => {
  return (
    <StyledBadge variant={variant} size={size} className={className} {...props}>
      {children}
    </StyledBadge>
  );
};



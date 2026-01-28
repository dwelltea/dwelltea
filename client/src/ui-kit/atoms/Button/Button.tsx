import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { ArrowRight } from 'lucide-react';
import styled from 'styled-components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: 'arrow' | React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  text-transform: none;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  font-family: inherit;
  outline: none;
  
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
  
  ${({ size }) => {
    switch (size) {
      case 'small':
        return 'height: 40px; padding: 0 16px; font-size: 14px;';
      case 'medium':
        return 'height: 48px; padding: 0 24px;';
      case 'large':
        return 'height: 56px; padding: 0 32px;';
      default:
        return 'height: 48px; padding: 0 24px;';
    }
  }}
  
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: #1a3d2e;
          color: #ffffff;
          &:hover:not(:disabled) {
            background-color: #152f24;
            transform: translateY(-1px);
          }
          &:active:not(:disabled) {
            background-color: #0f1f18;
            transform: translateY(0);
          }
          &:focus-visible {
            outline: 2px solid #1a3d2e;
            outline-offset: 2px;
          }
          &:disabled {
            background-color: #d1d5db;
            color: #9ca3af;
            cursor: not-allowed;
            opacity: 0.6;
          }
        `;
      case 'secondary':
        return `
          background-color: #ffffff;
          color: #1a3d2e;
          border: 1px solid #1a3d2e;
          &:hover:not(:disabled) {
            background-color: #f9fafb;
            border-color: #152f24;
          }
          &:active:not(:disabled) {
            background-color: #f3f4f6;
          }
          &:focus-visible {
            outline: 2px solid #1a3d2e;
            outline-offset: 2px;
          }
          &:disabled {
            background-color: #ffffff;
            color: #9ca3af;
            border-color: #d1d5db;
            cursor: not-allowed;
            opacity: 0.6;
          }
        `;
      case 'tertiary':
        return `
          background-color: transparent;
          color: #1f2937;
          &:hover:not(:disabled) {
            color: #1a3d2e;
            text-decoration: underline;
          }
          &:active:not(:disabled) {
            color: #152f24;
          }
          &:focus-visible {
            outline: 2px solid #1a3d2e;
            outline-offset: 2px;
            border-radius: 4px;
          }
          &:disabled {
            color: #9ca3af;
            cursor: not-allowed;
            text-decoration: none;
          }
        `;
      default:
        return `
          background-color: #1a3d2e;
          color: #ffffff;
        `;
    }
  }}
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon,
  children,
  disabled,
  ...props
}) => {
  const renderIcon = () => {
    if (icon === 'arrow') {
      return <ArrowRight size={20} />;
    }
    return icon;
  };

  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      {...props}
    >
      {children}
      {icon && renderIcon()}
    </StyledButton>
  );
};

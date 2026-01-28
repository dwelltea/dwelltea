import React from 'react';
import styled from 'styled-components';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'fullWidth'> {
  error?: boolean;
  fullWidth?: boolean;
}

const StyledInput = styled.input<{ $error?: boolean; $fullWidth?: boolean }>`
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  height: 56px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #1f2937;
  background-color: #ffffff;
  border: 1px solid ${({ $error }) => ($error ? '#dc2626' : '#d1d5db')};
  border-radius: 8px;
  transition: all 0.2s ease;
  outline: none;
  font-family: inherit;
  
  &::placeholder {
    color: #6b7280;
  }
  
  &:focus {
    border-color: ${({ $error }) => ($error ? '#dc2626' : '#1a3d2e')};
    box-shadow: 0 0 0 3px ${({ $error }) => ($error ? 'rgba(220, 38, 38, 0.1)' : 'rgba(26, 61, 46, 0.1)')};
  }
  
  &:disabled {
    background-color: #f3f4f6;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  &[aria-invalid='true'] {
    border-color: #dc2626;
  }
`;

export const Input: React.FC<InputProps> = ({
  error,
  fullWidth = false,
  className = '',
  ...props
}) => {
  return (
    <StyledInput
      $error={error}
      $fullWidth={fullWidth}
      aria-invalid={error}
      className={className}
      {...props}
    />
  );
};



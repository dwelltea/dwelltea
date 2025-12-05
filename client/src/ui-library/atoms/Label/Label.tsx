import React from 'react';
import styled from 'styled-components';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: #374151;
  margin-bottom: 8px;
  
  &[data-disabled='true'] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const RequiredIndicator = styled.span`
  color: #dc2626;
`;

export const Label: React.FC<LabelProps> = ({
  children,
  required = false,
  className = '',
  ...props
}) => {
  return (
    <StyledLabel className={className} {...props}>
      {children}
      {required && <RequiredIndicator>*</RequiredIndicator>}
    </StyledLabel>
  );
};



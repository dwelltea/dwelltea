import React from 'react';
import { Input } from '../../atoms/Input';
import { Form, InputWrapper, SubmitButton, ArrowIcon } from './index.styles';

export interface AddressSearchProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const AddressSearch: React.FC<AddressSearchProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder = "Enter an address to get started.",
  disabled = false,
  className = '',
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !disabled) {
      onSubmit(value);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={className}>
      <InputWrapper>
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          fullWidth
          disabled={disabled}
        />
      </InputWrapper>
      <SubmitButton type="submit" aria-label="Submit address" disabled={disabled}>
        <ArrowIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </ArrowIcon>
      </SubmitButton>
    </Form>
  );
};


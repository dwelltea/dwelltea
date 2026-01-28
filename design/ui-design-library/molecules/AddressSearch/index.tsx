import React from 'react';
import { Input } from '../../atoms/Input';

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
    <form 
      onSubmit={handleSubmit} 
      className={`flex gap-3 max-w-[600px] w-full ${className}`}
    >
      <div className="flex-1 min-w-0">
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          fullWidth
          disabled={disabled}
        />
      </div>
      <button
        type="submit"
        aria-label="Submit address"
        disabled={disabled}
        className={`
          w-14 h-14 bg-green-700 text-white rounded-lg
          flex items-center justify-center
          transition-colors duration-200 flex-shrink-0
          hover:bg-green-800 active:bg-green-900
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-700 focus-visible:outline-offset-2
          disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-60
          disabled:hover:bg-gray-300
        `}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </form>
  );
};


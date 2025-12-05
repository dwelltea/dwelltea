import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  fullWidth?: boolean;
}

export function Input({
  error,
  fullWidth = false,
  className = '',
  ...props
}: InputProps) {
  const baseClasses = 'h-14 px-4 text-base border rounded-lg outline-none transition-all';
  const widthClass = fullWidth ? 'w-full' : '';
  const errorClass = error ? 'border-red-600 focus:border-red-600 focus:ring-red-600/10' : 'border-gray-300 focus:border-green-700 focus:ring-green-700/10';
  const disabledClass = props.disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed opacity-60' : 'bg-white text-gray-900';
  
  return (
    <input
      className={`${baseClasses} ${widthClass} ${errorClass} ${disabledClass} ${className}`}
      style={{
        boxShadow: error ? '0 0 0 3px rgba(220, 38, 38, 0.1)' : undefined,
      }}
      aria-invalid={error}
      {...props}
    />
  );
}


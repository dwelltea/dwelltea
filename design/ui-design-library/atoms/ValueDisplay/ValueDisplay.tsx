import React from 'react';

export interface ValueDisplayProps {
  value: string | number;
  currency?: string;
  size?: 'large' | 'xlarge' | 'xxlarge';
  className?: string;
}

export function ValueDisplay({
  value,
  currency = '$',
  size = 'xlarge',
  className = '',
}: ValueDisplayProps) {
  const formatValue = (val: string | number): string => {
    if (typeof val === 'number') {
      return val.toLocaleString('en-US');
    }
    return val;
  };

  const sizeClasses = {
    large: 'text-5xl',
    xlarge: 'text-6xl',
    xxlarge: 'text-7xl',
  };

  return (
    <div className={`font-bold text-gray-900 ${sizeClasses[size]} ${className}`}>
      <span className="text-gray-600">{currency}</span>
      {formatValue(value)}
    </div>
  );
}


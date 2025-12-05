import React from 'react';

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

const statusColors = {
  hot: 'text-orange-600',
  warm: 'text-yellow-600',
  cold: 'text-blue-600',
  neutral: 'text-gray-600',
};

export function StatusBadge({
  status,
  label,
  size = 'large',
  className = '',
}: StatusBadgeProps) {
  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-[32px]',
  };

  const displayLabel = label || statusLabels[status];
  const colorClass = statusColors[status];

  return (
    <div className={`font-bold ${sizeClasses[size]} ${colorClass} ${className}`}>
      {displayLabel}
    </div>
  );
}


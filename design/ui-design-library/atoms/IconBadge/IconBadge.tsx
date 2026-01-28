import React from 'react';

export interface IconBadgeProps {
  children: React.ReactNode;
  variant?: 'ai' | 'default' | 'custom';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

export function IconBadge({
  children,
  variant = 'default',
  size = 'medium',
  color,
  className = '',
}: IconBadgeProps) {
  const sizeClasses = {
    small: 'w-8 h-8 text-xs',
    medium: 'w-10 h-10 text-sm',
    large: 'w-12 h-12 text-base',
  };

  const variantStyles = {
    ai: 'bg-orange-500 text-white',
    default: 'bg-green-700 text-white',
    custom: '',
  };

  const bgColor = variant === 'custom' && color ? { backgroundColor: color } : {};
  const textColor = variant === 'custom' ? 'text-white' : '';

  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${variant === 'custom' ? '' : variantStyles[variant]}
        ${textColor}
        rounded-full
        flex items-center justify-center
        font-semibold
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      style={bgColor}
    >
      {children}
    </div>
  );
}


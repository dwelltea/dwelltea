import { ButtonHTMLAttributes } from 'react';
import { ArrowRight } from 'lucide-react';

interface DwellteaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: 'arrow' | React.ReactNode;
}

export function DwellteaButton({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon,
  children,
  className = '',
  disabled,
  ...props
}: DwellteaButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 font-medium';
  
  const variantStyles = {
    primary: `
      bg-[var(--green-700)] text-white
      hover:bg-[var(--green-800)] hover:-translate-y-0.5
      active:bg-[var(--green-900)] active:translate-y-0
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--green-700)] focus-visible:outline-offset-2
      disabled:bg-[var(--gray-300)] disabled:text-[var(--gray-400)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0
    `,
    secondary: `
      bg-white text-[var(--green-700)] border border-[var(--green-700)]
      hover:bg-[var(--gray-50)] hover:border-[var(--green-800)]
      active:bg-[var(--gray-100)]
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--green-700)] focus-visible:outline-offset-2
      disabled:bg-white disabled:text-[var(--gray-400)] disabled:border-[var(--gray-300)] disabled:cursor-not-allowed disabled:opacity-60
    `,
    tertiary: `
      bg-transparent text-[var(--gray-800)]
      hover:text-[var(--green-700)] hover:underline
      active:text-[var(--green-800)]
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--green-700)] focus-visible:outline-offset-2 focus-visible:rounded
      disabled:text-[var(--gray-400)] disabled:cursor-not-allowed disabled:no-underline
    `
  };
  
  const sizeStyles = {
    small: 'h-10 px-4 text-sm',
    medium: 'h-12 px-6 text-base',
    large: 'h-14 px-8 text-base'
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  
  const renderIcon = () => {
    if (icon === 'arrow') {
      return <ArrowRight size={20} />;
    }
    return icon;
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`.trim().replace(/\s+/g, ' ')}
      disabled={disabled}
      {...props}
    >
      {children}
      {icon && renderIcon()}
    </button>
  );
}

interface DwellteaLogoProps {
  variant?: 'horizontal' | 'icon';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'white';
  className?: string;
}

export function DwellteaLogo({
  variant = 'horizontal',
  size = 'medium',
  color = 'primary',
  className = ''
}: DwellteaLogoProps) {
  const sizes = {
    small: { icon: 24, text: 'text-lg' },
    medium: { icon: 32, text: 'text-2xl' },
    large: { icon: 48, text: 'text-4xl' }
  };
  
  const colors = {
    primary: 'var(--green-700)',
    white: '#ffffff'
  };
  
  const fillColor = colors[color];
  const iconSize = sizes[size].icon;
  
  const HouseIcon = () => (
    <svg 
      width={iconSize} 
      height={iconSize} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M16 3L4 12v16h8v-10h8v10h8V12L16 3z" 
        fill={fillColor}
      />
    </svg>
  );
  
  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <HouseIcon />
      </div>
    );
  }
  
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <HouseIcon />
      <span 
        className={`${sizes[size].text} font-bold tracking-tight`}
        style={{ color: fillColor }}
      >
        Dwelltea
      </span>
    </div>
  );
}

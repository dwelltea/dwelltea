interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'cream';
  className?: string;
}

export function Card({ children, variant = 'default', className = '' }: CardProps) {
  const bgColor = variant === 'cream' ? 'bg-cream-100' : 'bg-white';
  
  return (
    <div className={`${bgColor} rounded-xl p-6 md:p-8 shadow-sm border border-gray-200 ${className}`}>
      {children}
    </div>
  );
}


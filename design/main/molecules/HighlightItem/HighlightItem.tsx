import React from 'react';

export interface HighlightItemProps {
  icon: React.ReactNode; // Icon from lucide-react (GraduationCap, Tree, Home, Building, TrendingUp, etc.)
  children: React.ReactNode; // Text content - can be string or complex JSX (supports multiple lines)
  className?: string;
}

export function HighlightItem({ icon, children, className = '' }: HighlightItemProps) {
  return (
    <div className={`flex gap-4 items-start ${className}`}>
      <div className="w-6 flex-shrink-0 flex items-start justify-start pt-0.5">
        <div className="text-gray-600">
          {icon}
        </div>
      </div>
      <div className="flex-1 text-gray-700 text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
}

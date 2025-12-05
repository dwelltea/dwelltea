'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function Accordion({
  title,
  children,
  defaultOpen = false,
  className = '',
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`w-full border border-gray-200 rounded-lg overflow-hidden bg-white ${className}`}>
      <button
        onClick={toggleAccordion}
        className={`w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2 ${
          isOpen ? 'border-b border-gray-200' : ''
        }`}
        type="button"
      >
        <h3 className="text-base font-semibold text-green-800 m-0">{title}</h3>
        <div
          className={`flex items-center justify-center text-green-800 transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          style={{ transitionDuration: '400ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          <ChevronDown size={20} />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? 'max-h-[10000px]' : 'max-h-0'
        }`}
        style={{ 
          transitionDuration: isOpen ? '1200ms' : '600ms', 
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' 
        }}
      >
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}


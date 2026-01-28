import React from 'react';

export interface ConfidenceSegment {
  label: string;
  width: number; // percentage (0-100)
  active: boolean;
  highlighted: boolean;
}

export interface ConfidenceBarProps {
  segments: ConfidenceSegment[];
  className?: string;
}

export function ConfidenceBar({
  segments,
  className = '',
}: ConfidenceBarProps) {
  const totalWidth = segments.reduce((sum, seg) => sum + seg.width, 0);
  
  // Normalize widths if they don't add up to 100
  const normalizedSegments = segments.map(seg => ({
    ...seg,
    width: (seg.width / totalWidth) * 100,
  }));

  return (
    <div className={`w-full ${className}`}>
      <div className="flex h-8 rounded-lg overflow-hidden border border-gray-200">
        {normalizedSegments.map((segment, index) => {
          let bgColor = 'bg-gray-100';
          let textColor = 'text-gray-500';
          
          if (segment.highlighted) {
            bgColor = 'bg-green-700';
            textColor = 'text-white';
          } else if (segment.active) {
            bgColor = 'bg-green-200';
            textColor = 'text-green-800';
          }
          
          return (
            <div
              key={index}
              className={`${bgColor} ${textColor} flex items-center justify-center text-xs font-medium transition-colors`}
              style={{ width: `${segment.width}%` }}
            >
              {segment.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}


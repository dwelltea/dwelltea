import React from 'react';
import styled from 'styled-components';

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

const BarContainer = styled.div`
  width: 100%;
`;

const BarWrapper = styled.div`
  display: flex;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
`;

const Segment = styled.div<{ $width: number; $active: boolean; $highlighted: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s ease;
  width: ${({ $width }) => $width}%;
  
  ${({ $active, $highlighted }) => {
    if ($highlighted) {
      return `
        background-color: #1a3d2e;
        color: #ffffff;
      `;
    }
    if ($active) {
      return `
        background-color: #d1fae5;
        color: #065f46;
      `;
    }
    return `
      background-color: #f3f4f6;
      color: #6b7280;
    `;
  }}
`;

export const ConfidenceBar: React.FC<ConfidenceBarProps> = ({
  segments,
  className = '',
}) => {
  const totalWidth = segments.reduce((sum, seg) => sum + seg.width, 0);
  
  // Normalize widths if they don't add up to 100
  const normalizedSegments = segments.map(seg => ({
    ...seg,
    width: (seg.width / totalWidth) * 100,
  }));

  return (
    <BarContainer className={className}>
      <BarWrapper>
        {normalizedSegments.map((segment, index) => (
          <Segment
            key={index}
            $width={segment.width}
            $active={segment.active}
            $highlighted={segment.highlighted}
          >
            {segment.label}
          </Segment>
        ))}
      </BarWrapper>
    </BarContainer>
  );
};


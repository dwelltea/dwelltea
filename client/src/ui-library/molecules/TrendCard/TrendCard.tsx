import React from 'react';
import styled from 'styled-components';
import { Card } from '../../atoms/Card';

export interface TrendDataPoint {
  x: number | string;
  y: number;
}

export interface TrendCardProps {
  title: string;
  data: TrendDataPoint[];
  trend?: 'up' | 'down' | 'neutral';
  period?: string;
  className?: string;
}

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #4b5563;
  margin: 0;
  text-align: center;
`;

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ChartSVG = styled.svg<{ $trend: 'up' | 'down' | 'neutral' }>`
  overflow: visible;
  
  polyline {
    stroke: ${({ $trend }) => {
      switch ($trend) {
        case 'up':
          return '#10b981';
        case 'down':
          return '#ef4444';
        default:
          return '#6b7280';
      }
    }};
  }
`;

// Simple SVG line chart component
function MiniLineChart({ data, trend }: { data: TrendDataPoint[]; trend?: 'up' | 'down' | 'neutral' }) {
  if (data.length < 2) return null;

  const width = 200;
  const height = 60;
  const padding = 10;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  // Normalize data to fit chart dimensions
  const minY = Math.min(...data.map(d => d.y));
  const maxY = Math.max(...data.map(d => d.y));
  const yRange = maxY - minY || 1;

  const points = data.map((point, index) => {
    const x = padding + (index / (data.length - 1)) * chartWidth;
    const y = padding + chartHeight - ((point.y - minY) / yRange) * chartHeight;
    return `${x},${y}`;
  }).join(' ');

  return (
    <ChartSVG width={width} height={height} $trend={trend || 'neutral'}>
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </ChartSVG>
  );
}

export const TrendCard: React.FC<TrendCardProps> = ({
  title,
  data,
  trend = 'neutral',
  period,
  className = '',
}) => {
  const fullTitle = period ? `${title} (${period})` : title;

  return (
    <div className={className}>
      <CardContent>
        <Title>{fullTitle}</Title>
        <ChartContainer>
          <MiniLineChart data={data} trend={trend} />
        </ChartContainer>
      </CardContent>
    </div>
  );
};


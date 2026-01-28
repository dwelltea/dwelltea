import React from 'react';
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

  const lineColor = trend === 'up' ? '#10b981' : trend === 'down' ? '#ef4444' : '#6b7280';

  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline
        points={points}
        fill="none"
        stroke={lineColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrendCard({
  title,
  data,
  trend = 'neutral',
  period,
  className = '',
}: TrendCardProps) {
  const fullTitle = period ? `${title} (${period})` : title;

  return (
    <Card className={className}>
      <div className="flex flex-col gap-3 text-center">
        <h3 className="text-lg font-semibold text-gray-600">{fullTitle}</h3>
        <div className="flex items-center justify-center">
          <MiniLineChart data={data} trend={trend} />
        </div>
      </div>
    </Card>
  );
}


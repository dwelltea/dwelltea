import { IconBadge } from '../../atoms/IconBadge';
import { Home } from 'lucide-react';

export interface AIInsightCardProps {
  insightText: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export function AIInsightCard({
  insightText,
  imageSrc,
  imageAlt,
  className = '',
}: AIInsightCardProps) {
  return (
    <div className={`bg-green-50 rounded-xl p-6 md:p-8 ${className}`}>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Left Column - Content */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <IconBadge variant="ai" size="medium">
              <div className="flex items-center justify-center gap-1">
                <span>AI</span>
                <Home size={12} />
              </div>
            </IconBadge>
            <span className="text-sm font-semibold text-gray-700">AI Insight</span>
          </div>
          <p className="text-base text-gray-700 leading-relaxed">
            {insightText}
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 md:max-w-md">
          <div className="aspect-video md:aspect-square rounded-lg overflow-hidden bg-gray-200">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

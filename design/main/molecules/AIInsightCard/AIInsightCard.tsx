import { Lightbulb } from 'lucide-react';

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
    <div className={`bg-green-50 rounded-xl ${className}`}>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 border border-gray-200 rounded-lg">
        {/* Left Column - Content */}
        <div className="flex-1 flex flex-col gap-4 p-6 md:pt-8 md:pb-0 md:pl-6 md:pr-0">
          <div className="flex items-start gap-3">
            {/* AI Insight Icon with Glow Effect */}
            <div className="flex-shrink-0 relative mt-0.5 ai-insight-icon-wrapper">
              <Lightbulb size={28} className="text-[#c4941f]" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#1a3d2e] mb-2 leading-tight">
                AI Insight
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {insightText}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 md:max-w-md">
          <div className="aspect-video md:aspect-square rounded-r-lg overflow-hidden bg-gray-200">
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

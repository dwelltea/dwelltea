import { ValueDisplay } from '../../atoms/ValueDisplay';

interface PropertyCardProps {
  image: string;
  address?: string;
  beds: number;
  baths: number;
  year: number;
  squareFeet: number;
  similarityScore: number;
  value?: number;
  showValue?: boolean;
  isPrimary?: boolean;
  className?: string;
}

export function PropertyCard({ 
  image, 
  address, 
  beds, 
  baths, 
  year,
  squareFeet,
  similarityScore,
  value,
  showValue,
  isPrimary,
  className = '' 
}: PropertyCardProps) {
  // Determine if we should show value (primary card or explicit showValue flag)
  const shouldShowValue = (showValue || isPrimary) && value !== undefined;
  const displayAddress = address || '';
  const imageAlt = displayAddress || 'Property';

  return (
    <div className={`bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gold-600 transition-all hover:shadow-md ${className}`}>
      <div className="aspect-video bg-gray-200 overflow-hidden">
        <img 
          src={image} 
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 space-y-3">
        {shouldShowValue ? (
          <div className="flex items-center justify-between gap-3">
            <div className="text-3xl font-bold text-gray-900">
              <ValueDisplay value={value!} size="large" />
            </div>
            <span className="text-sm text-gray-600 whitespace-nowrap">{squareFeet || 0} sq ft.</span>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-3">
            <p className="font-medium text-gray-900">{displayAddress}</p>
            <span className="text-sm text-gray-600 whitespace-nowrap">{squareFeet || 0} sq ft.</span>
          </div>
        )}
        <div className="w-full h-px bg-gray-200 my-1"></div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1 text-sm text-gray-600">
            <span>{beds} bd, {baths}a</span>
            <span>{year}</span>
          </div>
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#f5f5dc] rounded-full flex-shrink-0">
            <span className="text-lg font-semibold text-gray-900">{similarityScore}</span>
          </div>
        </div>
      </div>
    </div>
  );
}


interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'cream';
  className?: string;
}

export function DwellteaCard({ children, variant = 'default', className = '' }: CardProps) {
  const bgColor = variant === 'cream' ? 'bg-[var(--cream-100)]' : 'bg-white';
  
  return (
    <div className={`${bgColor} rounded-xl p-6 md:p-8 shadow-sm border border-[var(--gray-200)] ${className}`}>
      {children}
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <DwellteaCard className={className}>
      <div className="flex flex-col gap-4">
        <div className="text-[var(--gold-600)]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[var(--gray-900)]">{title}</h3>
        <p className="text-[var(--gray-700)] leading-relaxed">{description}</p>
      </div>
    </DwellteaCard>
  );
}

interface PropertyCardProps {
  image: string;
  address: string;
  beds: number;
  baths: number;
  year: number;
  similarityScore: number;
  className?: string;
}

export function PropertyCard({ 
  image, 
  address, 
  beds, 
  baths, 
  year, 
  similarityScore,
  className = '' 
}: PropertyCardProps) {
  return (
    <div className={`bg-white rounded-xl overflow-hidden border border-[var(--gray-200)] hover:border-[var(--gold-600)] transition-all hover:shadow-md ${className}`}>
      <div className="aspect-video bg-[var(--gray-200)] overflow-hidden">
        <img 
          src={image} 
          alt={address}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 space-y-3">
        <p className="text-xs text-[var(--gray-500)] uppercase tracking-wide">Similarity Score</p>
        <p className="font-medium text-[var(--gray-900)]">{address}</p>
        <div className="flex items-center justify-between text-sm text-[var(--gray-600)]">
          <span>{beds} bd, {baths}a</span>
          <span>{year}</span>
        </div>
        <div className="inline-block bg-pink-50 px-4 py-2 rounded-full">
          <span className="text-lg font-semibold text-[var(--gray-900)]">{similarityScore}</span>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  value: string | number;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className = '' }: StatCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-5xl font-bold text-[var(--gray-900)] mb-2">{value}</div>
      <div className="text-sm text-[var(--gray-600)]">{label}</div>
    </div>
  );
}

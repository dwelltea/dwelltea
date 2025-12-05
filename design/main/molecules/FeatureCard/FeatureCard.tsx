import { Card } from '../../atoms/Card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <Card className={className}>
      <div className="flex flex-col gap-4">
        <div className="text-gold-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}


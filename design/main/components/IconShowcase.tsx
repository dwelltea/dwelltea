import { 
  Home, 
  Search, 
  User, 
  MapPin, 
  GraduationCap,
  Building2,
  TrendingUp,
  ArrowRight,
  Shield,
  DollarSign,
  Brain,
  Book,
  ArrowUpRight,
  Lightbulb
} from 'lucide-react';

interface IconDisplayProps {
  icon: React.ReactNode;
  name: string;
  size?: number;
  color?: string;
}

function IconDisplay({ icon, name, size = 32, color }: IconDisplayProps) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border border-[var(--gray-200)] hover:border-[var(--gold-600)] transition-colors">
      <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-[var(--cream-100)]" style={{ color }}>
        {icon}
      </div>
      <span className="text-sm text-center text-[var(--gray-600)]">{name}</span>
    </div>
  );
}

export function IconShowcase() {
  const navigationIcons = [
    { icon: <Search size={20} />, name: 'Search', color: 'var(--gray-800)' },
    { icon: <User size={20} />, name: 'User', color: 'var(--gray-800)' },
    { icon: <ArrowRight size={20} />, name: 'Arrow Right', color: 'var(--gray-800)' }
  ];
  
  const featureIcons = [
    { icon: <Shield size={40} />, name: 'AI/Shield', color: 'var(--green-700)' },
    { icon: <DollarSign size={40} />, name: 'Valuation', color: 'var(--gold-600)' },
    { icon: <Brain size={40} />, name: 'AI Insights', color: 'var(--gold-600)' },
    { icon: <Lightbulb size={40} />, name: 'Insights', color: 'var(--gold-600)' },
    { icon: <MapPin size={40} />, name: 'Location', color: 'var(--gold-600)' }
  ];
  
  const contentIcons = [
    { icon: <GraduationCap size={32} />, name: 'Education', color: 'var(--gold-600)' },
    { icon: <Book size={32} />, name: 'Programs', color: 'var(--gold-600)' },
    { icon: <Home size={32} />, name: 'Housing', color: 'var(--gold-600)' },
    { icon: <Building2 size={32} />, name: 'Development', color: 'var(--gold-600)' },
    { icon: <TrendingUp size={32} />, name: 'Growth', color: 'var(--gold-600)' },
    { icon: <ArrowUpRight size={32} />, name: 'Increase', color: 'var(--gold-600)' }
  ];
  
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-xl font-semibold text-[var(--gray-900)]">Navigation Icons (20px)</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {navigationIcons.map((item, index) => (
            <IconDisplay key={index} {...item} size={20} />
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="mb-4 text-xl font-semibold text-[var(--gray-900)]">Feature Icons (40px)</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featureIcons.map((item, index) => (
            <IconDisplay key={index} {...item} size={40} />
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="mb-4 text-xl font-semibold text-[var(--gray-900)]">Content Icons (32px)</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {contentIcons.map((item, index) => (
            <IconDisplay key={index} {...item} size={32} />
          ))}
        </div>
      </div>
    </div>
  );
}

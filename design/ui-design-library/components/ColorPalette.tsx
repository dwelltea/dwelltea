interface ColorSwatchProps {
  color: string;
  name: string;
  hex: string;
}

function ColorSwatch({ color, name, hex }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-2">
      <div 
        className="w-full h-20 rounded-lg border border-[var(--gray-200)]"
        style={{ backgroundColor: color }}
      />
      <div className="text-sm">
        <p className="font-medium text-[var(--gray-900)]">{name}</p>
        <p className="text-[var(--gray-500)] font-mono text-xs">{hex}</p>
      </div>
    </div>
  );
}

export function ColorPalette() {
  const primaryColors = [
    { color: 'var(--green-900)', name: 'Green 900', hex: '#0f1f18' },
    { color: 'var(--green-800)', name: 'Green 800', hex: '#152f24' },
    { color: 'var(--green-700)', name: 'Green 700 (Primary)', hex: '#1a3d2e' },
    { color: 'var(--green-600)', name: 'Green 600', hex: '#235241' },
    { color: 'var(--green-500)', name: 'Green 500', hex: '#2d6754' },
    { color: 'var(--green-400)', name: 'Green 400', hex: '#4a8870' }
  ];
  
  const accentColors = [
    { color: 'var(--gold-600)', name: 'Gold 600 (Accent)', hex: '#c4941f' },
    { color: 'var(--gold-500)', name: 'Gold 500', hex: '#d4a435' },
    { color: 'var(--gold-400)', name: 'Gold 400', hex: '#ddb85b' }
  ];
  
  const neutralColors = [
    { color: 'var(--cream-100)', name: 'Cream 100 (BG)', hex: '#faf8f3' },
    { color: '#ffffff', name: 'White', hex: '#ffffff' },
    { color: 'var(--gray-900)', name: 'Gray 900', hex: '#111827' },
    { color: 'var(--gray-700)', name: 'Gray 700', hex: '#374151' },
    { color: 'var(--gray-500)', name: 'Gray 500', hex: '#6b7280' },
    { color: 'var(--gray-300)', name: 'Gray 300', hex: '#d1d5db' }
  ];
  
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-xl font-semibold text-[var(--gray-900)]">Primary Green</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {primaryColors.map((color, index) => (
            <ColorSwatch key={index} {...color} />
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="mb-4 text-xl font-semibold text-[var(--gray-900)]">Accent Gold</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {accentColors.map((color, index) => (
            <ColorSwatch key={index} {...color} />
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="mb-4 text-xl font-semibold text-[var(--gray-900)]">Neutrals</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {neutralColors.map((color, index) => (
            <ColorSwatch key={index} {...color} />
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Button, Logo, Card, ValueDisplay, IconBadge, StatusBadge } from './atoms';
import { FeatureCard, PropertyCard, StatCard, AddressSearch, ConfidenceBar, TrendCard, Accordion } from './molecules';
import { ColorPalette, IconShowcase } from './organisms';
import { 
  Shield, 
  DollarSign, 
  Brain, 
  GraduationCap, 
  TrendingUp,
  Home,
  Lightbulb
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'colors' | 'typography' | 'buttons' | 'icons' | 'cards' | 'inputs' | 'accordions' | 'valuation'>('overview');
  const [addressSearch1, setAddressSearch1] = useState('');
  const [addressSearch2, setAddressSearch2] = useState('123 Main Street');
  
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'buttons', label: 'Buttons' },
    { id: 'icons', label: 'Icons' },
    { id: 'cards', label: 'Cards' },
    { id: 'inputs', label: 'Inputs' },
    { id: 'accordions', label: 'Accordions' },
    { id: 'valuation', label: 'Valuation' }
  ] as const;
  
  return (
    <div className="min-h-screen bg-cream-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo size="medium" />
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Design System</span>
          </div>
        </div>
      </header>
      
      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-green-700 text-green-700'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Dwelltea Design System
              </h1>
              <p className="text-lg text-gray-700 max-w-3xl">
                A comprehensive UI component library based on the Dwelltea real estate application. 
                This interactive showcase demonstrates all design tokens, components, and patterns 
                extracted from the original design specifications.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Brand Identity</h2>
              <Card>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-3">Horizontal Logo</p>
                      <Logo variant="horizontal" size="large" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-3">Icon Only</p>
                      <Logo variant="icon" size="large" />
                    </div>
                  </div>
                  <div className="flex-1 bg-green-700 rounded-lg p-8">
                    <Logo variant="horizontal" size="large" color="white" />
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                  icon={<Shield size={40} />}
                  title="AI Insight"
                  description="Leveraging artificial intelligence to provide deep market insights and property valuations."
                />
                <FeatureCard
                  icon={<DollarSign size={40} />}
                  title="Accurate Valuations"
                  description="Precise property valuations based on comprehensive market data and analysis."
                />
                <FeatureCard
                  icon={<Brain size={40} />}
                  title="AI-Powered Insights"
                  description="Smart algorithms that understand neighborhood trends and market dynamics."
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Statistics</h2>
              <Card>
                <div className="grid grid-cols-3 divide-x divide-gray-200">
                  <StatCard value="58" label="Homes for sale" />
                  <StatCard value="123" label="Homes Sold" />
                  <StatCard value="18" label="Days on market" />
                </div>
              </Card>
            </div>
          </div>
        )}
        
        {activeTab === 'colors' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Color Palette</h1>
              <p className="text-lg text-gray-700 max-w-3xl mb-8">
                The Dwelltea color system uses a warm, earthy palette with dark green as the primary 
                brand color and gold accents for highlights and interactive elements.
              </p>
            </div>
            <ColorPalette />
          </div>
        )}
        
        {activeTab === 'typography' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Typography</h1>
              <p className="text-lg text-gray-700 max-w-3xl mb-8">
                Clear typographic hierarchy with system fonts for optimal performance.
              </p>
            </div>
            
            <Card>
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Display - 60px Bold</p>
                  <div className="text-6xl font-bold text-gray-900" style={{ lineHeight: 1.1 }}>
                    Real Connections. Real Insights.
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-2">H1 - 42px Bold</p>
                  <h1 className="text-[42px] font-bold text-green-700" style={{ lineHeight: 1.2 }}>
                    Community Insights for Orleans
                  </h1>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-2">H2 - 32px Bold</p>
                  <h2 className="text-[32px] font-bold text-gray-900" style={{ lineHeight: 1.25 }}>
                    Full Property Breakdown
                  </h2>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-2">H3 - 28px Bold</p>
                  <h3 className="text-[28px] font-bold text-gray-900" style={{ lineHeight: 1.3 }}>
                    School Highlights
                  </h3>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-2">Body Large - 18px Regular</p>
                  <p className="text-lg text-gray-800" style={{ lineHeight: 1.6 }}>
                    This is large body text used for subheadings and introductory paragraphs. 
                    It provides comfortable reading with generous line height.
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-2">Body Regular - 16px Regular</p>
                  <p className="text-base text-gray-700" style={{ lineHeight: 1.5 }}>
                    This is regular body text used for main content and descriptions throughout the application. 
                    It maintains excellent readability at all sizes.
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-2">Body Small - 14px Regular</p>
                  <p className="text-sm text-gray-600" style={{ lineHeight: 1.5 }}>
                    Small body text for supporting information, metadata, and captions.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )}
        
        {activeTab === 'buttons' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Buttons</h1>
              <p className="text-lg text-gray-700 max-w-3xl mb-8">
                Interactive button components with three variants and multiple sizes.
              </p>
            </div>
            
            <Card>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Buttons</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary" size="small">
                      Small Primary
                     </Button>
                    <Button variant="primary" size="medium">
                      Medium Primary
                    </Button>
                    <Button variant="primary" size="large">
                      Large Primary
                    </Button>
                    <Button variant="primary" size="large" icon="arrow">
                      With Arrow
                    </Button>
                    <Button variant="primary" size="medium" disabled>
                      Disabled
                    </Button>
                  </div>
                  <div className="mt-4">
                    <Button variant="primary" size="large" fullWidth>
                      Connect to the Community
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Secondary Buttons</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="secondary" size="small">
                      Small Secondary
                    </Button>
                    <Button variant="secondary" size="medium">
                      Medium Secondary
                    </Button>
                    <Button variant="secondary" size="large">
                      Large Secondary
                    </Button>
                    <Button variant="secondary" size="medium" disabled>
                      Disabled
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Tertiary Buttons / Text Links</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="tertiary" size="small">
                      Edit address
                    </Button>
                    <Button variant="tertiary" size="medium">
                      Sign In
                    </Button>
                    <Button variant="tertiary" size="medium" disabled>
                      Disabled Link
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Button States</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Hover over buttons to see interactive states. Primary buttons have a subtle lift effect.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )}
        
        {activeTab === 'icons' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Icons</h1>
              <p className="text-lg text-gray-700 max-w-3xl mb-8">
                Comprehensive icon system using Lucide React with consistent sizing and coloring.
              </p>
            </div>
            <IconShowcase />
          </div>
        )}
        
        {activeTab === 'cards' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Cards & Components</h1>
              <p className="text-lg text-gray-700 max-w-3xl mb-8">
                Reusable card components for displaying features, properties, and statistics.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Feature Cards</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                  icon={<GraduationCap size={40} />}
                  title="Top-rated Schools"
                  description="Access to highly-rated educational institutions with excellent programs and facilities."
                />
                <FeatureCard
                  icon={<TrendingUp size={40} />}
                  title="Strong Growth"
                  description="Neighborhood experiencing strong upward pressure with increasing property values."
                />
                <FeatureCard
                  icon={<Home size={40} />}
                  title="Prime Location"
                  description="Conveniently located near top schools, amenities, and transportation."
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Cards</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-600 mb-4">Primary Card with Value Display</p>
                  <PropertyCard
                    image="https://images.unsplash.com/photo-1755914305030-bfc5c0196d76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ1cmJhbiUyMGhvdXNlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY0NzY4MzU2fDA&ixlib=rb-4.1.0&q=80&w=400"
                    address="123 Main Street"
                    beds={4}
                    baths={3}
                    year={2015}
                    squareFeet={1200}
                    similarityScore={86}
                    value={950000}
                    isPrimary={true}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-4">Comparable Properties Grid</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <PropertyCard
                      image="https://images.unsplash.com/photo-1755914305030-bfc5c0196d76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ1cmJhbiUyMGhvdXNlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY0NzY4MzU2fDA&ixlib=rb-4.1.0&q=80&w=400"
                      address="123 Main Street"
                      beds={4}
                      baths={3}
                      year={2008}
                      squareFeet={1200}
                      similarityScore={86}
                      value={950000}
                      isPrimary={true}
                    />
                    <PropertyCard
                      image="https://images.unsplash.com/photo-1628744448839-a475cc0e90c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY0ODMzOTY2fDA&ixlib=rb-4.1.0&q=80&w=400"
                      address="472 Cedar Ln"
                      beds={4}
                      baths={3}
                      year={2013}
                      squareFeet={1200}
                      similarityScore={88}
                    />
                    <PropertyCard
                      image="https://images.unsplash.com/photo-1755914305030-bfc5c0196d76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ1cmJhbiUyMGhvdXNlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY0NzY4MzU2fDA&ixlib=rb-4.1.0&q=80&w=400"
                      address="483 Pine St"
                      beds={3}
                      baths={2}
                      year={2004}
                      squareFeet={1200}
                      similarityScore={82}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Cards</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card variant="default">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">White Card</h3>
                  <p className="text-gray-700">
                    Clean white background for primary content containers.
                  </p>
                </Card>
                <Card variant="cream">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cream Card</h3>
                  <p className="text-gray-700">
                    Warm cream background for highlighted sections.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'inputs' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Inputs</h1>
              <p className="text-lg text-gray-700 max-w-3xl mb-8">
                Form input components including address search and text inputs.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Address Search</h2>
              <Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-4">Default Address Search</p>
                    <AddressSearch
                      value={addressSearch1}
                      onChange={setAddressSearch1}
                      onSubmit={(value: string) => {
                        console.log('Submitted:', value);
                        alert(`Searching for: ${value}`);
                      }}
                      placeholder="Enter an address to get started."
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-4">With Value</p>
                    <AddressSearch
                      value={addressSearch2}
                      onChange={setAddressSearch2}
                      onSubmit={(value: string) => {
                        console.log('Submitted:', value);
                        alert(`Searching for: ${value}`);
                      }}
                      placeholder="Enter an address"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-4">Disabled State</p>
                    <AddressSearch
                      value=""
                      onChange={() => {}}
                      onSubmit={(value: string) => console.log('Submitted:', value)}
                      placeholder="Enter an address"
                      disabled
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
        
        {activeTab === 'accordions' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Accordions</h1>
              <p className="text-lg text-gray-700 max-w-3xl mb-8">
                Expandable and collapsible accordion components for organizing content.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Accordion Examples</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-4">Default Accordion (Collapsed)</p>
                  <Accordion title="View Full Breakdown">
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        This is the content inside the accordion. It can contain any React components or HTML elements.
                      </p>
                      <p className="text-gray-700">
                        Click the header to expand or collapse the content.
                      </p>
                    </div>
                  </Accordion>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-4">Accordion (Default Open)</p>
                  <Accordion title="Property Details" defaultOpen={true}>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Property Information</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>4 bedrooms, 3 bathrooms</li>
                          <li>1,200 sq ft</li>
                          <li>Built in 2008</li>
                        </ul>
                      </div>
                    </div>
                  </Accordion>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-4">Multiple Accordions</p>
                  <div className="space-y-2">
                    <Accordion title="Section 1">
                      <p className="text-gray-700">Content for section 1</p>
                    </Accordion>
                    <Accordion title="Section 2">
                      <p className="text-gray-700">Content for section 2</p>
                    </Accordion>
                    <Accordion title="Section 3">
                      <p className="text-gray-700">Content for section 3</p>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'valuation' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Valuation Components</h1>
              <p className="text-lg text-gray-700 max-w-3xl mb-8">
                Components for displaying property valuations, confidence levels, and market insights.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Value Display</h2>
              <Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-4">Large Size</p>
                    <ValueDisplay value={950000} size="large" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-4">XLarge Size (Default)</p>
                    <ValueDisplay value={950000} size="xlarge" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-4">XXLarge Size</p>
                    <ValueDisplay value={950000} size="xxlarge" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-4">With Custom Currency</p>
                    <ValueDisplay value={950000} currency="€" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-4">String Value</p>
                    <ValueDisplay value="1,250,000" />
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Confidence Bar</h2>
              <Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-4">Default (Low/Medium/High)</p>
                    <ConfidenceBar
                      segments={[
                        { label: 'Low', width: 20, active: false, highlighted: false },
                        { label: 'Medium', width: 30, active: true, highlighted: false },
                        { label: 'High', width: 50, active: true, highlighted: true },
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-4">All Segments Active</p>
                    <ConfidenceBar
                      segments={[
                        { label: 'Low', width: 25, active: true, highlighted: false },
                        { label: 'Medium', width: 35, active: true, highlighted: true },
                        { label: 'High', width: 40, active: true, highlighted: true },
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-4">Only High Highlighted</p>
                    <ConfidenceBar
                      segments={[
                        { label: 'Low', width: 30, active: false, highlighted: false },
                        { label: 'Medium', width: 30, active: false, highlighted: false },
                        { label: 'High', width: 40, active: true, highlighted: true },
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-4">Uneven Widths</p>
                    <ConfidenceBar
                      segments={[
                        { label: 'Low', width: 15, active: false, highlighted: false },
                        { label: 'Medium', width: 25, active: true, highlighted: false },
                        { label: 'High', width: 60, active: true, highlighted: true },
                      ]}
                    />
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Icon Badge</h2>
              <Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-4">AI Badge (Orange)</p>
                    <IconBadge variant="ai" size="medium">AI</IconBadge>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-4">Different Sizes</p>
                    <div className="flex items-center gap-4">
                      <IconBadge variant="ai" size="small">AI</IconBadge>
                      <IconBadge variant="ai" size="medium">AI</IconBadge>
                      <IconBadge variant="ai" size="large">AI</IconBadge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-4">Default Variant</p>
                    <IconBadge variant="default" size="medium">✓</IconBadge>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-4">Custom Color</p>
                    <IconBadge variant="custom" color="#8b5cf6" size="medium">★</IconBadge>
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Status Badge</h2>
              <Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-4">Market Temperature Statuses</p>
                    <div className="flex flex-col gap-4">
                      <StatusBadge status="hot" size="large" />
                      <StatusBadge status="warm" size="large" />
                      <StatusBadge status="cold" size="large" />
                      <StatusBadge status="neutral" size="large" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-4">Different Sizes</p>
                    <div className="flex flex-col gap-2">
                      <StatusBadge status="hot" size="small" />
                      <StatusBadge status="hot" size="medium" />
                      <StatusBadge status="hot" size="large" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-4">Custom Label</p>
                    <StatusBadge status="hot" label="Very Hot" size="large" />
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Trend Card</h2>
              <Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-4">Upward Trend</p>
                    <TrendCard
                      title="Valuation Trend"
                      period="3 yrs"
                      trend="up"
                      data={[
                        { x: 0, y: 750000 },
                        { x: 1, y: 780000 },
                        { x: 2, y: 820000 },
                        { x: 3, y: 850000 },
                        { x: 4, y: 900000 },
                        { x: 5, y: 950000 },
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-4">Downward Trend</p>
                    <TrendCard
                      title="Price Trend"
                      period="1 yr"
                      trend="down"
                      data={[
                        { x: 0, y: 1000000 },
                        { x: 1, y: 980000 },
                        { x: 2, y: 950000 },
                        { x: 3, y: 920000 },
                        { x: 4, y: 900000 },
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-4">Neutral Trend</p>
                    <TrendCard
                      title="Market Stability"
                      trend="neutral"
                      data={[
                        { x: 0, y: 800000 },
                        { x: 1, y: 810000 },
                        { x: 2, y: 790000 },
                        { x: 3, y: 805000 },
                        { x: 4, y: 800000 },
                      ]}
                    />
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Combined Example</h2>
              <Card>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Estimated Value</p>
                    <ValueDisplay value={950000} size="xlarge" />
                    <p className="text-sm text-gray-600 mt-2">Confidence Range: $900,000 - $1.00M</p>
                    <div className="mt-4">
                      <ConfidenceBar
                        segments={[
                          { label: 'Low', width: 20, active: false, highlighted: false },
                          { label: 'Medium', width: 30, active: true, highlighted: false },
                          { label: 'High', width: 50, active: true, highlighted: true },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Lightbulb size={20} className="text-green-800" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-green-800 mb-1">AI Insight</h3>
                        <p className="text-sm text-gray-600">
                          Your home's estimated value increased 3.2% this quarter, largely driven by higher demand for similar properties in your neighbourhood.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-gray-600">
          <p>Dwelltea Design System - Interactive Component Library</p>
        </div>
      </footer>
    </div>
  );
}

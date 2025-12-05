import type { Meta, StoryObj } from '@storybook/react';
import { FeatureCard } from './FeatureCard';
import { Shield, DollarSign, Brain, TrendingUp } from 'lucide-react';

const meta: Meta<typeof FeatureCard> = {
  title: 'Molecules/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeatureCard>;

export const Default: Story = {
  args: {
    icon: <Shield size={32} />,
    title: 'Accurate Valuations',
    description: 'Get precise property valuations powered by AI and real-time market data.',
  },
};

export const WithDollarIcon: Story = {
  args: {
    icon: <DollarSign size={32} />,
    title: 'Market Insights',
    description: 'Understand market trends and pricing with comprehensive analytics.',
  },
};

export const WithBrainIcon: Story = {
  args: {
    icon: <Brain size={32} />,
    title: 'AI Powered',
    description: 'Leverage artificial intelligence for smarter real estate decisions.',
  },
};

export const WithTrendingIcon: Story = {
  args: {
    icon: <TrendingUp size={32} />,
    title: 'Growth Tracking',
    description: 'Track property value growth and neighborhood trends over time.',
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
      <FeatureCard
        icon={<Shield size={32} />}
        title="Accurate Valuations"
        description="Get precise property valuations powered by AI and real-time market data."
      />
      <FeatureCard
        icon={<DollarSign size={32} />}
        title="Market Insights"
        description="Understand market trends and pricing with comprehensive analytics."
      />
      <FeatureCard
        icon={<Brain size={32} />}
        title="AI Powered"
        description="Leverage artificial intelligence for smarter real estate decisions."
      />
    </div>
  ),
};



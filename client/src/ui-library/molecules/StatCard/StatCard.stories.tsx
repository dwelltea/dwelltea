import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Molecules/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: {
    value: '58',
    label: 'Homes for sale',
  },
};

export const WithCurrency: Story = {
  args: {
    value: '$450,000',
    label: 'Median List Price',
  },
};

export const WithPercentage: Story = {
  args: {
    value: '12%',
    label: 'Year over Year Growth',
  },
};

export const MultipleStats: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '32px' }}>
      <StatCard value="58" label="Homes for sale" />
      <StatCard value="123" label="Homes Sold" />
      <StatCard value="18" label="Days on market" />
      <StatCard value="$450,000" label="Median List Price" />
    </div>
  ),
};



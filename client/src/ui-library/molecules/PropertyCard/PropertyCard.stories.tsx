import type { Meta, StoryObj } from '@storybook/react';
import { PropertyCard } from './PropertyCard';

const meta: Meta<typeof PropertyCard> = {
  title: 'Molecules/PropertyCard',
  component: PropertyCard,
  tags: ['autodocs'],
  argTypes: {
    beds: {
      control: { type: 'number', min: 0, max: 10 },
    },
    baths: {
      control: { type: 'number', min: 0, max: 10, step: 0.5 },
    },
    year: {
      control: { type: 'number', min: 1900, max: 2024 },
    },
    similarityScore: {
      control: { type: 'number', min: 0, max: 100 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PropertyCard>;

export const Default: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
    address: '123 Main Street, Ottawa, ON',
    beds: 3,
    baths: 2,
    year: 2015,
    similarityScore: 85,
  },
};

export const HighScore: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
    address: '456 Oak Avenue, Toronto, ON',
    beds: 4,
    baths: 3,
    year: 2020,
    similarityScore: 92,
  },
};

export const LowScore: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
    address: '789 Pine Road, Vancouver, BC',
    beds: 2,
    baths: 1,
    year: 1995,
    similarityScore: 65,
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
      <PropertyCard
        image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800"
        address="123 Main Street, Ottawa, ON"
        beds={3}
        baths={2}
        year={2015}
        similarityScore={85}
      />
      <PropertyCard
        image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800"
        address="456 Oak Avenue, Toronto, ON"
        beds={4}
        baths={3}
        year={2020}
        similarityScore={92}
      />
      <PropertyCard
        image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800"
        address="789 Pine Road, Vancouver, BC"
        beds={2}
        baths={1}
        year={1995}
        similarityScore={65}
      />
    </div>
  ),
};



import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'cream'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is a default card with white background.',
  },
};

export const Cream: Story = {
  args: {
    variant: 'cream',
    children: 'This is a cream variant card with warm background.',
  },
};

export const WithContent: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '20px', fontWeight: 600 }}>
          Card Title
        </h3>
        <p style={{ color: '#374151', lineHeight: 1.5 }}>
          This is a card with more detailed content. It can contain any React elements
          and will maintain proper spacing and styling.
        </p>
      </div>
    ),
  },
};



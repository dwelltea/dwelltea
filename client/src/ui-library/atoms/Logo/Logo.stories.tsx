import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Atoms/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['horizontal', 'icon'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['primary', 'white'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Horizontal: Story = {
  args: {
    variant: 'horizontal',
    size: 'medium',
    color: 'primary',
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'icon',
    size: 'medium',
    color: 'primary',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <Logo variant="horizontal" size="small" />
      <Logo variant="horizontal" size="medium" />
      <Logo variant="horizontal" size="large" />
    </div>
  ),
};

export const WhiteVariant: Story = {
  render: () => (
    <div style={{ background: '#1a3d2e', padding: '24px', display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Logo variant="horizontal" size="medium" color="white" />
      <Logo variant="icon" size="medium" color="white" />
    </div>
  ),
};



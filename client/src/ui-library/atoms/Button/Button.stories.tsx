import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    fullWidth: {
      control: 'boolean',
    },
    icon: {
      control: 'select',
      options: [undefined, 'arrow'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Connect to the Community',
  },
};

export const PrimaryLarge: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Unlock Detailed Report',
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    icon: 'arrow',
    children: 'Get Started',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Cancel',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    children: 'Sign In',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    fullWidth: true,
    children: 'Full Width Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Button variant="primary" size="small">Small Button</Button>
      <Button variant="primary" size="medium">Medium Button</Button>
      <Button variant="primary" size="large">Large Button</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="tertiary">Tertiary Button</Button>
    </div>
  ),
};

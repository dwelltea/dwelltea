import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter address or property ID',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: 'Full width input field',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: '123 Main Street, Ottawa, ON',
    placeholder: 'Enter address',
  },
};

export const Error: Story = {
  args: {
    error: true,
    placeholder: 'Invalid input',
    defaultValue: 'Invalid value',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    defaultValue: 'Cannot edit',
  },
};



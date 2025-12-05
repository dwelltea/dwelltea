import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    required: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Property Address',
  },
};

export const Required: Story = {
  args: {
    children: 'Email Address',
    required: true,
  },
};

export const WithInput: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px' }}>
      <Label htmlFor="address">Property Address</Label>
      <input
        id="address"
        type="text"
        placeholder="Enter address"
        style={{
          height: '56px',
          padding: '0 16px',
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          fontSize: '16px',
        }}
      />
    </div>
  ),
};



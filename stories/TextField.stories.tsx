import type { Meta, StoryObj } from '@storybook/react';
import TextField from '@/components/ui/TextField';

const meta: Meta<typeof TextField> = {
  component: TextField,
  argTypes: {
    value: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};

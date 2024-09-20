import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    placeholder: '플레이스 홀더',
  },
  argTypes: {
    type: {
      options: [
        'text',
        'password',
        'number',
        'email',
        'tel',
        'time',
        'search',
        'url',
        'search',
        'date',
        'file',
      ],
      control: { type: 'radio' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '0.25rem',
      }}
    >
      <Label htmlFor="input">라벨</Label>
      <Input {...args} id="input" />
    </div>
  ),
};

export const Placeholder: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '0.25rem',
      }}
    >
      <Label htmlFor="placeholder">라벨</Label>
      <Input {...args} id="placeholder" />
    </div>
  ),
};

export const Value: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '0.25rem',
      }}
    >
      <Label htmlFor="value">라벨</Label>
      <Input {...args} value="인풋 텍스트" id="value" />
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '0.25rem',
      }}
    >
      <Label htmlFor="disabled">라벨</Label>
      <Input {...args} disabled id="disabled" />
    </div>
  ),
};

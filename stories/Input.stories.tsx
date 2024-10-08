import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import type { Meta, StoryObj } from '@storybook/react';
import Description from '@/components/ui/Description';
import SearchFilled from '@/components/icons/SearchFilled';
import ErrorMessage from '@/components/ui/ErrorMessage';

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
    size: {
      options: ['sm', 'md', 'lg'],
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
    'aria-invalid': {
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
      <Description>설명입니다.</Description>
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
      <Description>설명입니다.</Description>
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
      <Description>설명입니다.</Description>
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
      <Description>설명입니다.</Description>
    </div>
  ),
};

export const WithErrorMessage: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '0.25rem',
      }}
    >
      <Label htmlFor="error-message">라벨</Label>
      <Input {...args} id="error-message" aria-invalid="true" />
      <ErrorMessage>에러 메시지입니다.</ErrorMessage>
    </div>
  ),
};

export const WithStartIcon: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '0.25rem',
      }}
    >
      <Label htmlFor="startIcon">라벨</Label>
      <div className="relative">
        <SearchFilled className="absolute left-4 top-3 h-5 w-5 text-gray-200" />
        <Input {...args} className="pl-9.5" />
      </div>
      <Description>설명입니다.</Description>
    </div>
  ),
};

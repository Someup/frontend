import Button from '@/components/ui/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: '버튼라벨',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['filled', 'outlined', 'rounded', 'icon'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <Button {...args} />
      <Button {...args} disabled />
    </div>
  ),
};

export const Outlined: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <Button {...args} variant="outlined" />
      <Button {...args} variant="outlined" disabled />
    </div>
  ),
};

export const Rounded: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <Button {...args} variant="rounded" />
      <Button {...args} variant="rounded" disabled />
    </div>
  ),
};

export const Icon: Story = {
  args: {
    variant: 'icon',
    children: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 5L19.6 10.5L16.7 19.4H7.3L4.4 10.5L12 5ZM12 2.5L2 9.8L5.8 21.5H18.1L22 9.8L12 2.5Z" />
      </svg>
    ),
  },
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <Button {...args} />
      <Button {...args} disabled />
    </div>
  ),
};

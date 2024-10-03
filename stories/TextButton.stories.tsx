import TextButton from '@/components/ui/TextButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextButton> = {
  component: TextButton,
  args: {
    children: '버튼라벨',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof TextButton>;

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <TextButton {...args} />
      <TextButton {...args} disabled />
    </div>
  ),
};

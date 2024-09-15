import Label from '@/components/ui/Label';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Label> = {
  component: Label,
  args: {
    children: 'Label',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (args) => <Label {...args} />,
};

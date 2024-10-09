import Spinner from '@/components/ui/spinner';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

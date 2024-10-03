import ThreeDotsFilled from '@/components/icons/ThreeDotsFilled';
import Button from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  args: {
    children: 'DropdownMenu',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger asChild>
        <Button variant="icon">
          <ThreeDotsFilled />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>이름 바꾸기</DropdownMenuItem>
        <DropdownMenuItem>삭제하기</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

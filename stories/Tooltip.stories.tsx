import Button from '@/components/ui/Button';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/Tooltip';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <div className="flex justify-between p-10">
      <TooltipProvider delayDuration={200}>
        <Tooltip {...args} open={true}>
          <TooltipTrigger asChild>
            <Button>Hover me</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Tooltips</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip {...args} open={true}>
          <TooltipTrigger asChild>
            <Button>Hover me</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Tooltips</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip {...args} open={true}>
          <TooltipTrigger asChild>
            <Button>Hover me</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Tooltips</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip {...args} open={true}>
          <TooltipTrigger asChild>
            <Button>Hover me</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Tooltips</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
};

export const LongText: Story = {
  render: (args) => (
    <div className="p-10">
      <TooltipProvider delayDuration={200}>
        <Tooltip {...args} open={true}>
          <TooltipTrigger asChild>
            <Button>Hover me</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>
              A message which appears when a cursor is positioned over an icon,
              image, hyperlink, or other element in a graphical user interface.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
};

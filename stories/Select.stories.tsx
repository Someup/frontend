import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';

const meta: Meta<typeof Select> = {
  component: Select,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="아카이브 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>아카이브 그룹</SelectLabel>
          <SelectItem value="1">첫번째 아카이브</SelectItem>
          <SelectItem value="2">두번째 아카이브</SelectItem>
          <SelectItem value="3">세번째 아카이브</SelectItem>
          <SelectItem value="4">네번째 아카이브</SelectItem>
          <SelectItem value="5">다섯번째 아카이브</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>기타 아카이브 그룹</SelectLabel>
          <SelectItem value="6">여섯번째 아카이브</SelectItem>
          <SelectItem value="7">일곱번째 아카이브</SelectItem>
          <SelectItem value="8">여덟번째 아카이브</SelectItem>
          <SelectItem value="9">아홉번째 아카이브</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

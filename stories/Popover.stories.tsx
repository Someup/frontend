import Button from '@/components/ui/Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/Command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover';
import { cn } from '@/lib/utils';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Popover> = {
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outlined">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  ),
};

export const WithPopover: Story = {
  render: function Render(args) {
    const [archives, setArchives] = useState([
      { label: '첫 번째 아카이브', value: '1' },
      { label: '두 번째 아카이브', value: '2' },
      { label: '세 번째 아카이브', value: '3' },
      { label: '네 번째 아카이브', value: '4' },
      { label: '다섯 번째 아카이브', value: '5' },
      { label: '여섯 번째 아카이브', value: '6' },
      { label: '일곱 번째 아카이브', value: '7' },
    ]);
    const [selected, setSelected] = useState<string | null>(null);
    const [search, setSearch] = useState<string>('');
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    return (
      <Popover {...args} open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <button
            className={cn(
              'px- group flex h-15 w-full max-w-64 items-center justify-between overflow-hidden rounded-2 bg-white px-4 py-2 text-base text-black shadow-[0_4px_14px_rgba(0,0,0,0.1)] ring-tertiary placeholder:text-base placeholder:font-regular placeholder:leading-1.5 placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-gray-600 [&>span]:line-clamp-1',
              !selected && 'text-gray-600',
            )}
          >
            {selected
              ? archives.find((archive) => archive.value === selected)?.label
              : '아카이브 선택'}

            <svg
              className="h-6 w-6 group-data-[state=open]:rotate-180"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M7 9L12 14L17 9"
                stroke="black"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </PopoverTrigger>
        <PopoverContent className="max-w-64 border-none p-0">
          <Command>
            <CommandInput
              placeholder="아카이브 검색"
              value={search}
              onValueChange={setSearch}
              className="border-b-0"
            />
            <CommandList>
              <CommandEmpty>
                {search ? (
                  <button
                    onClick={() => {
                      setArchives((prev) => [
                        ...prev,
                        { label: search, value: search },
                      ]);
                      setSelected(search);
                      setIsPopoverOpen(false);
                    }}
                    className="block h-full w-full text-center text-gray-600 ring-tertiary hover:bg-gray-100/50 focus:bg-gray-100/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2"
                  >
                    &apos;{search}&apos; 만들기
                  </button>
                ) : (
                  'No archives'
                )}
              </CommandEmpty>
              <CommandGroup>
                {archives.map((archive) => (
                  <CommandItem
                    value={archive.value}
                    key={archive.value}
                    onSelect={() => {
                      setSelected(archive.value);
                    }}
                    className={cn(
                      archive.value === selected && 'bg-gray-50/50',
                    )}
                  >
                    {archive.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
};

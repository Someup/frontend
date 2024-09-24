import Button from '@/components/ui/Button';
import Chip, { IChipProps } from '@/components/ui/Chip';
import Input from '@/components/ui/Input';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Chip> = {
  component: Chip,
  args: {
    children: 'Chip',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  render: (args) => (
    <div>
      <Chip {...args} />
    </div>
  ),
};

export const Removable: Story = {
  render: (args) => (
    <div>
      <Chip {...args} onClose={() => alert('click')} />
    </div>
  ),
};

export const Form: Story = {
  render: function Render(args: IChipProps) {
    const [tags, setTags] = useState<string[]>([
      'react',
      'typescript',
      'tailwindcss',
    ]);
    const [tag, setTag] = useState('');

    function handleAddTag(): void {
      if (!tag.trim()) return;
      setTags([...tags, tag]);
      setTag('');
    }

    function handleRemoveTag(index: number): void {
      setTags(tags.filter((v, i) => i !== index));
    }

    return (
      <div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Chip key={index} onClose={() => handleRemoveTag(index)} {...args}>
              {tag}
            </Chip>
          ))}
        </div>
        <div className="mt-8 flex gap-2">
          <Input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
          />
          <Button onClick={handleAddTag} disabled={!tag.trim()}>
            Add
          </Button>
        </div>
      </div>
    );
  },
};

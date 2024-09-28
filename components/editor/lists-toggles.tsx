import { ToolbarToggleGroup, ToolbarToggleItem } from '@/components/ui/Toolbar';
import React from 'react';
import BulletIcon from '@/assets/bulleted-list.svg';
import NumberIcon from '@/assets/numbered-list.svg.svg';
import {
  useCellValues,
  currentListType$,
  iconComponentFor$,
  usePublisher,
  applyListType$,
} from '@mdxeditor/editor';
import { type ListType } from '@lexical/list';

const ListToggles = () => {
  const [currentListType] = useCellValues(currentListType$, iconComponentFor$);
  const applyListType = usePublisher(applyListType$);

  const handleChange = (value: ListType) => {
    applyListType(value);
  };
  return (
    <ToolbarToggleGroup
      type="single"
      value={currentListType}
      onValueChange={handleChange}
      className="flex gap-1"
    >
      <ToolbarToggleItem value="bullet">
        <BulletIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="number">
        <NumberIcon />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
  );
};

export default ListToggles;

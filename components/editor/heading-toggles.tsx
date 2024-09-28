import { FunctionComponent } from 'react';
import { usePublisher, convertSelectionToNode$ } from '@mdxeditor/editor';
import { $createHeadingNode, type HeadingTagType } from '@lexical/rich-text';
import { $createParagraphNode } from 'lexical';
import Heading1Icon from '@/assets/heading-1.svg';
import Heading2Icon from '@/assets/heading-2.svg';
import Heading3Icon from '@/assets/heading-3.svg';

import { ToolbarToggleGroup, ToolbarToggleItem } from '@/components/ui/Toolbar';

const HeadingToggles: FunctionComponent = () => {
  const convertSelectionToNode = usePublisher(convertSelectionToNode$);
  const handleChange = (blockType: HeadingTagType) => {
    if (blockType.startsWith('h')) {
      convertSelectionToNode(() => $createHeadingNode(blockType));
    } else {
      convertSelectionToNode(() => $createParagraphNode());
    }
  };
  return (
    <ToolbarToggleGroup
      type="single"
      onValueChange={handleChange}
      className="flex gap-1"
    >
      <ToolbarToggleItem value="h1">
        <Heading1Icon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="h2">
        <Heading2Icon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="h3">
        <Heading3Icon />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
  );
};

export default HeadingToggles;

import { FunctionComponent } from 'react';
import {
  usePublisher,
  convertSelectionToNode$,
  currentBlockType$,
  useCellValue,
} from '@mdxeditor/editor';
import { $createQuoteNode } from '@lexical/rich-text';
import { $createParagraphNode } from 'lexical';
import BlockQuoteIcon from '@/assets/block-quote.svg';
import { ToolbarToggleGroup, ToolbarToggleItem } from '@/components/ui/Toolbar';
import DividerButton from '@/components/editor/divider-button';

const QuoteGroups: FunctionComponent = () => {
  const convertSelectionToNode = usePublisher(convertSelectionToNode$);
  const currentBlockType = useCellValue(currentBlockType$);
  const handleToggleQuote = () => {
    if (currentBlockType === 'quote') {
      convertSelectionToNode(() => $createParagraphNode());
    } else {
      convertSelectionToNode(() => $createQuoteNode());
    }
  };
  return (
    <div className="flex items-center gap-1">
      <DividerButton />
      <ToolbarToggleGroup
        type="single"
        onValueChange={handleToggleQuote}
        className="flex"
      >
        <ToolbarToggleItem value="quote">
          <BlockQuoteIcon />
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
    </div>
  );
};

export default QuoteGroups;

import { insertCodeBlock$, IS_CODE, usePublisher } from '@mdxeditor/editor';
import { ToolbarButton } from '@/components/ui/Toolbar';
import FormatButton from '@/components/editor/format-button';
import CodeBlock from '@/assets/code-block.svg';
import InlineCodeBlock from '@/assets/code-block.svg';

const CodeBlockGroups = () => {
  const insertCodeBlock = usePublisher(insertCodeBlock$);

  return (
    <div className="flex gap-1">
      <FormatButton format={IS_CODE} formatName="code">
        <InlineCodeBlock />
      </FormatButton>
      <ToolbarButton value="code block" onClick={() => insertCodeBlock({})}>
        <CodeBlock />
      </ToolbarButton>
    </div>
  );
};

export default CodeBlockGroups;

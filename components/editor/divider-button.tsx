import { ToolbarButton } from '@/components/ui/Toolbar';
import { usePublisher, insertThematicBreak$ } from '@mdxeditor/editor';
import DividerIcon from '@/assets/dividing-line.svg';

const DividerButton = () => {
  const insertThematicBreak = usePublisher(insertThematicBreak$);

  return (
    <ToolbarButton onClick={() => insertThematicBreak()}>
      <DividerIcon />
    </ToolbarButton>
  );
};

export default DividerButton;

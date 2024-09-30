import { ToolbarToggleGroup, ToolbarToggleItem } from '@/components/ui/Toolbar';
import {
  useCellValues,
  currentFormat$,
  usePublisher,
  applyFormat$,
  type FORMAT,
} from '@mdxeditor/editor';
import { TextFormatType } from 'lexical';
import React, { FunctionComponent } from 'react';

interface FormatButtonProps {
  format: FORMAT;
  formatName: TextFormatType;
  children?: React.ReactNode;
}

const FormatButton: FunctionComponent<FormatButtonProps> = ({
  format,
  formatName,
  children,
}) => {
  const [currentFormat] = useCellValues(currentFormat$);
  const applyFormat = usePublisher(applyFormat$);
  const active = (currentFormat & format) !== 0;
  const handleChange = () => {
    applyFormat(formatName);
  };

  return (
    <ToolbarToggleGroup
      type="single"
      value={active ? 'on' : 'off'}
      onValueChange={handleChange}
      className="flex"
    >
      <ToolbarToggleItem value="on" title={formatName}>
        {children}
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
  );
};

export default FormatButton;

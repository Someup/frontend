import FormatButton from '@/components/editor/format-button';
import { IS_BOLD, IS_STRIKETHROUGH, IS_UNDERLINE } from '@mdxeditor/editor';
import React, { FunctionComponent } from 'react';
import BoldIcon from '@/assets/bold.svg';
import UnderlineIcon from '@/assets/underline.svg';
import StrikethroughIcon from '@/assets/strike-through.svg';

const BoldUnderlineStrikethoughToggles: FunctionComponent = () => {
  return (
    <div className="flex gap-1">
      <FormatButton format={IS_BOLD} formatName="bold">
        <BoldIcon />
      </FormatButton>
      <FormatButton format={IS_UNDERLINE} formatName="underline">
        <UnderlineIcon />
      </FormatButton>
      <FormatButton format={IS_STRIKETHROUGH} formatName="strikethrough">
        <StrikethroughIcon />
      </FormatButton>
    </div>
  );
};

export default BoldUnderlineStrikethoughToggles;

import Button from '@/components/ui/Button';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import RadioGroup from '@/components/ui/RadioGroup';
import RadioGroupItem from '@/components/ui/RadioGroupItem';
import {
  SummaryLanguageLabels,
  SummaryLevelLabels,
  SummaryToneLabels,
} from '@/constants/SummaryOptionLabels';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';
import { SummaryOptions } from '@/types/summary-types';
import { ChangeEvent, FunctionComponent, useId, useState } from 'react';

interface OptionDialogProps {
  onConfirm: (options: SummaryOptions) => void;
}
const OptionDialog: FunctionComponent<OptionDialogProps> = ({ onConfirm }) => {
  const levelRadioGroupId = useId();
  const toneRadioGroupId = useId();
  const languageRadioGroupId = useId();

  const [level, setLevel] = useState<SummaryOptions['level']>('base');
  const [tone, setTone] = useState<SummaryOptions['tone']>('casual');
  const [language, setLanguage] = useState<SummaryOptions['language']>('kr');
  const [keyword, setKeyword] = useState<string>('');

  const handleConfirmButtonClick = () => {
    onConfirm({
      level,
      tone,
      language,
      keyword,
    });
  };

  const handleLevelRadioGroupValueChange = (value: SummaryOptions['level']) => {
    setLevel(value);
  };

  const handleToneRadioGroupValueChange = (value: SummaryOptions['tone']) => {
    setTone(value);
  };

  const handleLanguageRadioGroupValueChange = (
    value: SummaryOptions['language'],
  ) => {
    setLanguage(value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  return (
    <DialogContent className="max-w-3xl p-10">
      <DialogHeader hidden className="hidden">
        <DialogTitle hidden>요약 설정</DialogTitle>
      </DialogHeader>
      <DialogDescription>
        <div className="grid gap-10">
          <div className="flex items-center">
            <Label
              className="mr-12 w-15 font-semibold"
              htmlFor={levelRadioGroupId}
            >
              요약 정도
            </Label>
            <RadioGroup
              id={levelRadioGroupId}
              orientation="horizontal"
              value={level}
              onValueChange={handleLevelRadioGroupValueChange}
              className="grid flex-1 grid-cols-3"
            >
              <RadioGroupItem value="base">
                {SummaryLevelLabels.base} (기본값)
              </RadioGroupItem>
              <RadioGroupItem value="brief">
                {SummaryLevelLabels.brief}
              </RadioGroupItem>
              <RadioGroupItem value="detail">
                {SummaryLevelLabels.detail}
              </RadioGroupItem>
            </RadioGroup>
          </div>
          <div className="flex items-center">
            <Label
              className="mr-12 w-15 font-semibold"
              htmlFor={toneRadioGroupId}
            >
              말투
            </Label>
            <RadioGroup
              id={toneRadioGroupId}
              orientation="horizontal"
              value={tone}
              onValueChange={handleToneRadioGroupValueChange}
              className="grid flex-1 grid-cols-3"
            >
              <RadioGroupItem value="casual">
                {SummaryToneLabels.casual} (기본값)
              </RadioGroupItem>
              <RadioGroupItem value="formal">
                {SummaryToneLabels.formal}
              </RadioGroupItem>
              <RadioGroupItem value="cute">
                {SummaryToneLabels.cute}
              </RadioGroupItem>
            </RadioGroup>
          </div>
          <div className="flex items-center">
            <Label
              className="mr-12 w-15 font-semibold"
              htmlFor={languageRadioGroupId}
            >
              언어
            </Label>
            <RadioGroup
              id={languageRadioGroupId}
              orientation="horizontal"
              value={language}
              onValueChange={handleLanguageRadioGroupValueChange}
              className="grid flex-1 grid-cols-3"
            >
              <RadioGroupItem value="kr">
                {SummaryLanguageLabels.kr} (기본값)
              </RadioGroupItem>
              <RadioGroupItem value="en">
                {SummaryLanguageLabels.en}
              </RadioGroupItem>
            </RadioGroup>
          </div>
        </div>
        <div className="mt-12 flex gap-2">
          <Label className={typography({ scale: 'body-3' })}>
            꼭 포함되어야할 키워드
          </Label>
          <span
            className={cn(typography({ scale: 'body-3' }), 'text-gray-400')}
          >
            (선택*)
          </span>
        </div>
        <Input className="mt-1" onChange={handleChange} />
      </DialogDescription>
      <DialogFooter className="p-0">
        <DialogClose asChild>
          <Button
            type="button"
            variant="filled"
            onClick={handleConfirmButtonClick}
          >
            확인
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default OptionDialog;

import {
  SummaryLanguageOption,
  SummaryLevelOption,
  SummaryToneOption,
} from '@/types/PostTypes';

export const SummaryLevelLabels: { [key in SummaryLevelOption]: string } = {
  base: '중간 요약',
  brief: '간단 요약',
  detail: '상세 요약',
};

export const SummaryToneLabels: { [key in SummaryToneOption]: string } = {
  formal: '비공식적 말투',
  casual: '공식적 말투',
  cute: '귀여운 말투',
};

export const SummaryLanguageLabels: { [key in SummaryLanguageOption]: string } =
  {
    kr: '한국어',
    en: '영어',
  };

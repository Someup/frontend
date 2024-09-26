export type SummaryLevelOption = 'base' | 'brief' | 'detail';
export type SummaryToneOption = 'formal' | 'casual' | 'cute';
export type SummaryLanguageOption = 'kr' | 'en';

export interface SummaryOptions {
  level: SummaryLevelOption;
  tone: SummaryToneOption;
  language: SummaryLanguageOption;
  keyword?: string;
}

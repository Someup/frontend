export type SummaryLevelOption = 'base' | 'brief' | 'detail';
export type SummaryToneOption = 'formal' | 'casual' | 'cute';
export type SummaryLanguageOption = 'kr' | 'en';
export interface SummaryOptions {
  level: SummaryLevelOption;
  tone: SummaryToneOption;
  language: SummaryLanguageOption;
  keyword?: string;
}

export interface Post {
  title: string;
  content: string;
  url: string;
  tagList: string[];
  createdAt: string;
  memoContent: string;
  memoCreatedAt: string;
}

export interface RequestPostBody {
  url: string;
  options: SummaryOptions;
}

export interface RequestPostResponse {
  postId: number;
}

export type GetPostResponse = Post;

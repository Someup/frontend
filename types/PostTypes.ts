export interface SummaryOptions {
  level: 'brief' | 'detail';
  tone: 'formalTone' | 'casualTone' | 'cuteTone';
  language: 'kr' | 'en';
}

export interface RequestPostBody {
  url: string;
  options: SummaryOptions;
}

export interface RequestPostResponse {
  postId: number;
}

export interface GetPostResponse {
  title: string;
  content: string;
  url: string;
  tagList: string[];
  createdAt: string;
  memoContent: string;
  memoCreatedAt: string;
}

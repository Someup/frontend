export interface SummaryOptions {
  level: 'brief' | 'detail' | 'base';
  tone: 'formal' | 'casual' | 'cute';
  language: 'kr' | 'en';
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

import { SummaryOptions } from '@/types/summary-types';

export interface Post {
  title: string;
  content: string;
  url: string;
  tagList: string[];
  createdAt: string;
  memoContent: string;
  memoCreatedAt: string;
}

export interface CreatePostBody {
  url: string;
  options: SummaryOptions;
}

export interface CreatePostResponse {
  postId: number;
}

export type GetPostResponse = Post;

export interface UpdatePostBody {
  content: string;
  title: string;
  tagList: string[];
  archiveId: number | null;
  memo: string | null;
}

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

export interface RequestPostBody {
  url: string;
  options: SummaryOptions;
}

export interface RequestPostResponse {
  postId: number;
}

export type GetPostResponse = Post;

export interface FetchPostsRequest {
  search?: string;
  archiveId?: string;
  page?: string;
}

export interface FetchPostsResponse {
  postList: {
    id: number;
    title: string;
    createdAt: string;
    tagList: string[] | null;
  }[];
}

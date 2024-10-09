import { SummaryOptions } from '@/types/summary-types';

export type PostStatus = 'draft' | 'published';

export interface Post {
  title: string;
  content: string;
  url: string;
  tagList: string[];
  createdAt: string;
  archiveId?: number;
  archiveName?: string;
  memoContent?: string;
  memoCreatedAt?: string;
}

export interface CreatePostRequest {
  url: string;
  options: SummaryOptions;
}

export interface CreatePostResponse {
  postId: number;
}

export interface GetPostRequest {
  id: string;
  status: PostStatus;
}

export type GetPostResponse = Post;

export interface UpdatePostBody {
  content: string;
  title: string;
  tagList: string[];
  archiveId: number | null;
  memo: string | null;
}

export interface FetchPostsRequest {
  search?: string;
  archiveId?: number;
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

export interface FetchAllPostCountResponse {
  totalCount: number;
}

export interface InsertMemoRequest {
  postId: string;
  content: string;
}

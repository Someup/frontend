'use client';
import { FunctionComponent } from 'react';
import { usePostDetail } from '@/lib/service/post/use-post-service';
import { typography } from '@/styles/typography';
import { cn } from '@/lib/utils';
import Editor from '@/components/editor/editor';
import { PostStatus } from '@/types/post-types';
import PostTitle from '@/components/post/post-title';
import MemoTextField from '@/components/post/memo-text-field';
import PostTags from '@/components/post/post-tags';
import Link from 'next/link';

interface PostDetailProps {
  id: string;
  status: PostStatus;
  readOnly?: boolean;
}
const PostDetail: FunctionComponent<PostDetailProps> = ({
  id,
  status,
  readOnly,
}) => {
  const {
    data: { content, url, title, memoContent, memoCreatedAt, tagList },
  } = usePostDetail({ id, status });

  const isPublished = status === 'published';

  return (
    <div className="mx-auto flex-1">
      <PostTitle initialTitle={title} readOnly />
      {isPublished && (
        <div className="flex h-15 justify-end">
          <Link
            href={`/write/${id}?status=published`}
            className={cn(typography({ scale: 'body-2' }))}
          >
            수정
          </Link>
        </div>
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          typography({ scale: 'body-6' }),
          'ml-2 break-all text-gray-100',
        )}
      >
        {url}
      </a>
      <Editor markdown={content} readOnly={readOnly} />
      {isPublished && (
        <>
          <PostTags
            initialTagList={tagList}
            editable={false}
            className="mt-2"
          />
          <MemoTextField initialMemo={memoContent} createdAt={memoCreatedAt} />
        </>
      )}
    </div>
  );
};

export default PostDetail;

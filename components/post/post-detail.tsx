'use client';
import { FunctionComponent } from 'react';
import { usePostDetail } from '@/lib/service/post/use-post-service';
import { typography } from '@/styles/typography';
import { cn } from '@/lib/utils';
import Editor from '@/components/editor/editor';
import { PostStatus } from '@/types/post-types';
import MemoTextField from '@/components/post/memo-text-field';
import PostTags from '@/components/post/post-tags';
import Link from 'next/link';
import DeletePostButton from '@/components/post/delete-post-button';

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
    data: {
      archiveId,
      archiveName,
      content,
      url,
      title,
      memoContent,
      memoCreatedAt,
      tagList,
    },
  } = usePostDetail({ id, status });

  const isPublished = status === 'published';

  return (
    <div className="mx-auto w-full max-w-[960px]">
      {isPublished && (
        <Link
          href={`/archive?id=${archiveId}`}
          className={cn(typography({ scale: 'body-2' }))}
        >
          {archiveName}
        </Link>
      )}
      <div className="flex flex-shrink-0 items-center justify-center p-4">
        <h1 className="text-center text-3xl font-semibold">{title}</h1>
      </div>
      {isPublished && (
        <div className="flex h-15 items-center justify-end">
          <Link
            href={`/write/${id}?status=published`}
            className={cn(typography({ scale: 'body-2' }))}
          >
            수정
          </Link>
          {/**
           * @todo fetchPost 응답으로 archiveId 받아 props 전달 필요
           */}
          <DeletePostButton postId={id} archiveId={''} />
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
          <MemoTextField
            postId={id}
            initialMemo={memoContent}
            createdAt={memoCreatedAt}
          />
        </>
      )}
    </div>
  );
};

export default PostDetail;

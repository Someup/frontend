import PostDetail from '@/components/post/post-detail';
import PostSaveButton from '@/components/post/post-save-button';

const WritePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <>
      <div className="flex gap-4">
        <PostDetail id={id} readOnly />
        <PostDetail id={id} />
      </div>
      <PostSaveButton id={id} />
    </>
  );
};

export default WritePage;

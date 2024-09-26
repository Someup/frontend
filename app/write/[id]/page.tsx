import PostEditor from '@/components/post/post-editor';
import PostSaveButton from '@/components/post/post-save-button';

const WritePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <>
      <div className="flex gap-4">
        <PostEditor id={id} />
      </div>
      <PostSaveButton id={id} />
    </>
  );
};

export default WritePage;

import PostEditor from '@/components/post/post-editor';

const WritePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div className="flex gap-4">
      <PostEditor id={id} />
    </div>
  );
};

export default WritePage;

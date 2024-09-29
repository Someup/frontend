import PostEditor from '@/components/post/post-editor';

const WritePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <PostEditor id={id} />;
};

export default WritePage;

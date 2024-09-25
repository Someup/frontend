import SummaryResult from '@/components/summary/SummaryResult';
import PostWriteSaveButton from '@/components/summary/post-write-save-button';

const WritePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>
      <div className="flex gap-4">
        <SummaryResult id={id} readOnly />
        <SummaryResult id={id} />
      </div>
      <PostWriteSaveButton id={id} />
    </div>
  );
};

export default WritePage;

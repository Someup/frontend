import SummaryResult from '@/components/summary/SummaryResult';

const WritePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="flex gap-4">
      <SummaryResult id={id} readOnly />
      <SummaryResult id={id} />
    </div>
  );
};

export default WritePage;

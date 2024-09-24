import SummaryInput from '@/components/summary/SummaryInput';

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="h-[8%] bg-white" />
      <div className="h-[65%] bg-primary">
        <SummaryInput />
      </div>
    </div>
  );
}

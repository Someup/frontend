import URLTextField from '@/components/post/url-text-field';

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="h-[8%] bg-white" />
      <div className="h-[65%] bg-primary-400">
        <URLTextField />
      </div>
    </div>
  );
}

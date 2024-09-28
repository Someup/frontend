'use client';
import Input from '@/components/ui/Input';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

interface PostSearchBarProps {
  defaultValue?: string;
}

export default function PostSearchBar({
  defaultValue = '',
}: PostSearchBarProps): React.JSX.Element {
  const [search, setSearch] = React.useState(defaultValue);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('search', search);

    router.push('/archive?' + newSearchParams.toString());
  };

  useEffect(() => {
    setSearch(defaultValue);
  }, [defaultValue]);

  return (
    <form onSubmit={handleSearch}>
      <Input
        placeholder="찾고싶은 요약본의 제목 또는 태그를 입력해주세요."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

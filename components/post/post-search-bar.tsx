'use client';
import SearchFilled from '@/components/icons/SearchFilled';
import Button from '@/components/ui/Button';
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
      <div className="relative">
        <SearchFilled className="absolute left-4 top-3 h-5 w-5 text-gray-200" />
        <Input
          className="pl-10 pr-25"
          placeholder="찾고싶은 요약본의 제목 또는 태그를 입력해주세요."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit" className="absolute right-0 top-0 h-11" size="lg">
          검색하기
        </Button>
      </div>
    </form>
  );
}

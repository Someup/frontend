import { ReactNode } from 'react';
import {
  HydrationBoundary,
  dehydrate,
  FetchQueryOptions,
} from '@tanstack/react-query';
import getQueryClient from '@/components/utils/getQueryClient';

interface PrefetchBoundaryProps {
  fetchQueryOptions: FetchQueryOptions[] | FetchQueryOptions;
  children: ReactNode;
}

export async function PrefetchBoundary({
  fetchQueryOptions,
  children,
}: PrefetchBoundaryProps) {
  const queryClient = getQueryClient();

  if (Array.isArray(fetchQueryOptions)) {
    await Promise.all(
      fetchQueryOptions.map((prefetchOption) =>
        queryClient.prefetchQuery(prefetchOption),
      ),
    );
  } else {
    await queryClient.prefetchQuery(fetchQueryOptions);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}

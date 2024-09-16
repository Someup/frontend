'use client';
import { getSummary } from '@/lib/api/summary';
import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';

const SummaryResult = ({ id }: { id: string }) => {
  const { data } = useSuspenseQuery({
    queryKey: ['summary', id],
    queryFn: () => getSummary(id),
  });

  return <div>{data}</div>;
};

export default SummaryResult;

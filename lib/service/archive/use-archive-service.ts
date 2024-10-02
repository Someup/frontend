/* eslint-disable no-void */
import archiveQueries from '@/lib/service/archive/archive-queries';
import {
  createArchive,
  deleteArchive,
  fetchArchives,
  updateArchive,
} from '@/lib/service/archive/archive-service';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';

export function useArchives() {
  return useSuspenseQuery({
    queryKey: archiveQueries.list().queryKey,
    queryFn: fetchArchives,
  });
}

export function useCreateArchive() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createArchive,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: archiveQueries.list._def,
      });
    },
  });
}

export function useUpdateArchive() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateArchive,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: archiveQueries.list._def,
      });
    },
  });
}

export function useDeleteArchive() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteArchive,
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: archiveQueries.list._def,
      });
    },
  });
}

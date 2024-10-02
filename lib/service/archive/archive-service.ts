import httpClient from '@/lib/http-client';
import {
  CreateArchiveRequest,
  CreateArchiveResponse,
  DeleteArchiveRequest,
  DeleteArchiveResponse,
  FetchArchivesResponse,
  UpdateArchiveRequest,
  UpdateArchiveResponse,
} from '@/types/archive-types';

export function fetchArchives() {
  return httpClient
    .get<FetchArchivesResponse>('/archives')
    .then((res) => res.data);
}

export function createArchive(request: CreateArchiveRequest) {
  return httpClient
    .post<CreateArchiveResponse>('/archives', request)
    .then((res) => res.data);
}
export function updateArchive({ archiveId, name }: UpdateArchiveRequest) {
  return httpClient
    .patch<UpdateArchiveResponse>(`/archives/${archiveId}`, { name })
    .then((res) => res.data);
}

export function deleteArchive({ archiveId }: DeleteArchiveRequest) {
  return httpClient.delete<DeleteArchiveResponse>(`/archives/${archiveId}`);
}

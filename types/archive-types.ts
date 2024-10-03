export interface FetchArchivesResponse {
  archives: Archive[];
}

export interface Archive {
  id: number;
  name: string;
}

export interface CreateArchiveRequest {
  name: string;
}

export interface CreateArchiveResponse {
  archiveId: number;
}

export interface UpdateArchiveRequest {
  archiveId: number;
  name: string;
}

export interface UpdateArchiveResponse {
  archiveId: number;
}

export interface DeleteArchiveRequest {
  archiveId: number;
}

export type DeleteArchiveResponse = void;

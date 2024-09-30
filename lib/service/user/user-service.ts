import httpClient from '@/lib/http-client';
import { GetUserResponse } from '@/types/user-types';

export async function fetchProfile() {
  return httpClient.get<GetUserResponse>('/users').then((res) => res.data);
}

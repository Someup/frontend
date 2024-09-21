export interface UserProfileResponse {
  activated: boolean;
  createdDateTime: string;
  updatedDateTime: string | null;
  id: number;
  name: string;
  email: string;
  profileImageUrl: string;
}

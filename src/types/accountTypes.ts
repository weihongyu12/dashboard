export interface AccountUpdateRequest {
  username: string;
  mobile: string;
  email: string;
  position: string;
  github: string;
  website: string;
  allowPublic: 0 | 1;
}

export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

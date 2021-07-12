export type Role = 'GENERAL_USER' | 'ADMINISTRATOR';

export type SessionKey = 'loggedIn' | 'accessToken' | 'refreshToken' | 'user';

export interface UserInfo {
  id: string;
  username: string;
  mobile: string;
  avatar: string;
  email: string;
  role: Role;
  sex: '男' | '女';
  position: string;
  password: string;
  github: string;
  website: string;
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}

export interface LogoutResponse {
  message: string;
}

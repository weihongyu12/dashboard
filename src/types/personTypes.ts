export type StatusType = 'office' | 'site' | 'trip' | 'vacation';

export interface PersonRequest {
  keyword?: string;
  page?: number;
  size?: number;
  sortby?: string;
  order?: 'asc' | 'desc';
}

export interface PersonResponse {
  id: string;
  code: string;
  name: string;
  gender: '男' | '女';
  mobile: string;
  amount: number;
  date: string;
  status: StatusType;
}

export interface DepartmentParams {
  keyword?: string;
  page?: number;
  size?: number;
  sortby?: string;
  order?: 'asc' | 'desc';
}

export interface DepartmentResponse {
  id: string;
  code: string;
  name: string;
}

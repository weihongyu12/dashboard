import { AxiosResponse } from 'axios';

interface Errors {
  field: string;
  code: string;
  message: string;
}

export interface ErrorResponse {
  message: string;
  errors?: Errors[];
}

export interface PaginationMeta {
  total: number;
  pages: number;
}

export interface PaginationResponse<T = any> {
  data: T;
  meta: PaginationMeta;
}

export interface HttpPaginationResponse<T = any> extends AxiosResponse {
  data: PaginationResponse<T>;
}

export interface HttpResponse<T = any> extends AxiosResponse {
  data: T;
}

export interface BaseResponse {
  id: string;
}

export type Order = 'asc' | 'desc';

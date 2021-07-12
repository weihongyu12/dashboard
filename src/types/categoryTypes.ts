import { PaginationResponse } from './httpTypes';

export interface Category {
  id: string;
  type: 0 | 1;
  name: string;
}

export interface CategoryIndexRequest {
  type?: '0' | '1';
  page?: number;
  perPage?: number;
}

export type CategoryIndexResponse = PaginationResponse<Category[]>;

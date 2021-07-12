import { PaginationResponse } from './httpTypes';

export interface Message {
  id: string;
  title: string;
  content: string;
  date: string;
  url: string;
  isRead: 0 | 1;
}

export type MessageResponse = PaginationResponse<Message[]>;

export interface MessageIndexRequest {
  page?: number;
  perPage?: number;
}

export interface MessageUpdateRequest {
  isRead: 0 | 1
}

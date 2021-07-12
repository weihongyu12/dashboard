import { HttpResponse } from './httpTypes';
import { Category } from './categoryTypes';

export interface CategoryAnalytics {
  categoriesId: string;
  category: Category;
  total: number;
}

export interface AnalyticsShowRequest {
  startTime?: string;
  endTime?: string;
}

export interface Analytics {
  income: number;
  expenditure: number;
  categories: CategoryAnalytics[];
}

export type AnalyticsResponse = HttpResponse<Analytics>;

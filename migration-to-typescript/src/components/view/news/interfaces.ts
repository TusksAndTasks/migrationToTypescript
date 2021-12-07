export interface mainData {
  author: string | null;
  content: string | null;
  description: string | null;
  publishedAt: string | null;
  source: { id: string | null; name: string | null };
  title: string | null;
  url: string | null;
  urlToImage: string | null;
}

export type Callback<T> = { (data: T): void };

export interface mainResponse {
  articles?: mainData[];
  status?: string;
  totalResults?: number;
}

export interface sourceResponse {
  sources?: sourceData[];
  status?: string;
}

export interface sourceData {
  category: string | null;
  country: string | null;
  description: string | null;
  id: string | null;
  language: string | null;
  name: string | null;
  url: string | null;
}

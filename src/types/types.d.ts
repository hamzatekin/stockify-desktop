interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
}

interface PaginatedResponse<T> {
  total: number;
  itemCount: number;
  numOfPages: number;
  pageNo: number;
  skip: number;
  results: T[];
}

type FetchStatus = 'idle' | 'loading' | 'success' | 'error';

export type APIResponse<T> = {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
};

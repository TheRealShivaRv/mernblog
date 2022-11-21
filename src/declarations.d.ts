// export type HeaderGenerator<T> = {

// }
export type FetchedData = {
  isError: boolean;
  status: number;
  data: any;
  error: string | null;
};

export type RequestConfig = {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  headers: any;
  body: any | undefined;
};

export type AuthRequestConfig = RequestConfig & {
  token: string;
};

export type HeaderLink = {
  id: number;
  label: string;
  link: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  date: Date | string;
  author: string;
  category: string | string[];
  thumbnail: string;
};
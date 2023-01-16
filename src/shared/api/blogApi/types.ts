/* eslint-disable prettier/prettier */
export interface BlogType {
  author: string | null;
  category: BlogCategoryType;
  title: string | null;
  slug: string | null;
  description: string | null;
  summary: string | null;
  main_image: string | null;
  createdAt: string | null;
  [blog: string]: any;
  _id: string;
  data?: any;
}

export interface BlogNewType {
  [x: string]: any;
  length: number;
  page: any;
  limit: any;
}

export interface BlogPayload {
  page?: any;
  limit?: any;
  message?: any;
  status?: 200;
  success?: true;
  totalPages?: any;
  total?: any;
  // data?: [];
  _id?: any;
  blog?: any;
  blogId?: any;
  data?: [
    {
      _id: string;
      author?: string;
      category?: string;
      title?: string;
      description?: string;
      summary?: string;
      main_image?: string;
      createdAt?: string;
    }
  ];
}

export interface BlogCategoryType {
  name: string | null;
  slug: string | null;
  description: string | null;
  _id: string;
}

export interface BlogCategoryPayload {
  blogCategoryData: {
    _id: string | null;
    name: string;
    slug?: string;
    description: string;
  };
}

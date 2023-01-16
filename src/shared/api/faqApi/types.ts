/* eslint-disable prettier/prettier */
export interface FaqType {
  map: any;
  title: string | null;
  slug: string | null;
  description: string | null;
  _id: string;
}

export interface FaqPayload {
  page?: any;
  limit?: any;
  message?: any;
  status?: 200;
  success?: true;
  totalPages?: any;
  total?: any;
  data?: [];
  // userData: {
  //   _id: string | null;
  //   title: string;
  //   slug?: string;
  //   description: string;
  // };
}

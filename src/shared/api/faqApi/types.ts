/* eslint-disable prettier/prettier */
export interface FaqType {
  title: string | null;
  slug: string | null;
  description: string | null;
  _id: string;
}

export interface FaqPayload {
  userData: {
    _id: string | null;
    title: string;
    slug?: string;
    description: string;
  };
}

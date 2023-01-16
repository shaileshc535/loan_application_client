/* eslint-disable prettier/prettier */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';
import { FaqPayload, FaqType } from './types';


export const faqApi = createApi({
  baseQuery,
  reducerPath: 'faqApi',
  endpoints: (builder) => ({
    getFaq: builder.query<FaqType, FaqPayload>({
      query: (faqId) => ({
        url: `/faq/faq/${faqId}`,
        method: 'GET',
        validateStatus: (response, result) => response.status === 200 && !result.isError,
      }),
    }),
    getAllFaq: builder.mutation<FaqType, FaqPayload>({
      query: (faqData) => ({
        url: `/faq/faq/`,
        method: 'POST',
        body: faqData,
      }),
    }),
  }),
});

export const { useGetFaqQuery, useGetAllFaqMutation } = faqApi;

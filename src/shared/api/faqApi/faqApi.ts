/* eslint-disable prettier/prettier */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';
import { FaqPayload, FaqType } from './types';

export const faqApi = createApi({
  baseQuery,
  reducerPath: 'faqApi',
  endpoints: (builder) => ({
    getFaq: builder.mutation<FaqType[], FaqPayload>({
      query: (userId) => ({
        url: `/faq/faq/${userId}`,
        method: 'GET',
        validateStatus: (response, result) => response.status === 200 && !result.isError,
      }),
    }),
    getAllFaq: builder.mutation<void, string>({
      query: (faqData) => ({
        url: `/faq/faq/`,
        method: 'POST',
        body: faqData,
      }),

      // userLogin: builder.mutation<void, string>({
      //   query: (userData) => ({
      //     url: `/user/login/`,
      //     method: 'POST',
      //     body: userData,
      //   }),
      // }),
    }),
  }),
});

export const { useGetFaqMutation, useGetAllFaqMutation } = faqApi;

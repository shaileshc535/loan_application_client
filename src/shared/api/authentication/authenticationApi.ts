/* eslint-disable prettier/prettier */
/* eslint-disable import/no-useless-path-segments */
// eslint-disable-next-line prettier/prettier
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLoginType, UserPayload, UserRegisterType } from './type';

export const authenticationApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://loan-app-elbs.onrender.com',
  }),
  reducerPath: 'userApi',
  endpoints: (builder) => ({
    userSignup: builder.mutation<UserPayload, UserRegisterType>({
      query: (userData) => ({
        url: `/user/register/`,
        method: 'POST',
        body: userData,
        validateStatus: (response, result) => response.status === 200 && !result.isError,
      }),
    }),

    userLogin: builder.mutation<UserPayload, UserLoginType>({
      query: ({ email, password, role }) => ({
        url: `/user/login/`,
        method: 'POST',
        body: { email, password, role },
        validateStatus: (response, result) => response.status === 200 && !result.isError,
      }),
    }),
  }),
});

export const { useUserSignupMutation, useUserLoginMutation } = authenticationApi;

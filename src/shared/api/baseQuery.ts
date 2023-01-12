/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
// import { auth } from '../helpers';

const baseUrl = process.env.BASE_API_URL;

const initialQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: async (headers) => {
    // const token = await auth.currentUser?.getIdToken();

    const token = localStorage.getItem('user');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const result = await initialQuery(args, api, extraOptions);

  return result.data as QueryReturnValue<unknown, FetchBaseQueryError, {}>;
};

export { baseQuery };

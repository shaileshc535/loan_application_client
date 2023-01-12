/* eslint-disable prettier/prettier */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';
import { BlogPayload, BlogType, BlogNewType } from './types';

export const blogApi = createApi({
  baseQuery,
  reducerPath: 'blogApi',
  endpoints: (builder) => ({
    getBlog: builder.query<BlogType, BlogPayload>({
      query: (blogId) => ({
        url: `/blog/blog/${blogId}`,
        method: 'GET',
        validateStatus: (response, result) => response.status === 200 && !result.isError,
      }),
    }),

    getBlogByCategoryId: builder.query<BlogType, BlogPayload>({
      query: (blogCatId) => ({
        url: `/blog/blog-by-category/${blogCatId}`,
        method: 'GET',
        validateStatus: (response, result) => response.status === 200 && !result.isError,
      }),
    }),

    getAllBlog: builder.mutation<BlogNewType, BlogPayload>({
      query: ({ page, limit }) => ({
        url: `/blog/blogs/`,
        method: 'POST',
        body: { page, limit },
      }),
    }),

    getAllBlogCategory: builder.mutation<void, string>({
      query: (blogCategoryData) => ({
        url: `/blog-category/blog-category/`,
        method: 'POST',
        body: blogCategoryData,
      }),
    }),
  }),
});

export const {
  useGetBlogQuery,
  useGetBlogByCategoryIdQuery,
  useGetAllBlogMutation,
  useGetAllBlogCategoryMutation,
} = blogApi;

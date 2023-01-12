/* eslint-disable prettier/prettier */
import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { authenticationApi } from '../api/authentication/authenticationApi';
import { faqApi } from '../api/faqApi/faqApi';
import { blogApi } from '../api/blogApi/blogApi';

const rootReducer = combineReducers({
  auth: authReducer,
  [authenticationApi.reducerPath]: authenticationApi.reducer,
  [faqApi.reducerPath]: faqApi.reducer,
  [blogApi.reducerPath]: blogApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };

/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable prettier/prettier */
import { AnyAction, configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { rootReducer } from './rootReducer';
import { authenticationApi } from '../api/authentication/authenticationApi';
import { faqApi } from '../api/faqApi/faqApi';
import { blogApi } from '../api/blogApi/blogApi';

const createStore = () => {
  const logger = createLogger({
    collapsed: true,
  });

  const rtkMiddleware = [authenticationApi.middleware, faqApi.middleware, blogApi.middleware];

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, ...rtkMiddleware]),
    devTools: process.env.NODE_ENV !== 'production',
  });

  return store;
};

export type AppStore = ReturnType<typeof createStore>;

export const store = createStore();

// setupListeners(store.dispatch);

export const wrapper = createWrapper<AppStore>(createStore);

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, AnyAction>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;

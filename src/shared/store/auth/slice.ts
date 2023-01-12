/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthReducer } from './types';
// import { userApi } from '../../api';

const initialState: AuthReducer = {
  token: null,
  stripeSecret: null,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addMatcher(
    //   userApi.endpoints.userLogin.matchFulfilled
    //   // (state, action: PayloadAction<string>) => {
    //   //   state.stripeSecret = action.payload;
    //   // }
    // );
  },
});

export const {
  reducer: authReducer,
  actions: { setToken },
} = auth;

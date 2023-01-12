/* eslint-disable prettier/prettier */
import { AuthState } from './types';

const all = (state: AuthState) => state.auth;

const token = (state: AuthState) => all(state).token;

const stripeSecret = (state: AuthState) => all(state).stripeSecret || '';

export const authSelectors = {
  token,
  stripeSecret,
};

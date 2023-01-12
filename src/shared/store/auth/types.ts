/* eslint-disable prettier/prettier */
export interface AuthReducer {
  token: string | null;
  stripeSecret: string | null;
}

export interface AuthState {
  auth: AuthReducer;
}

/* eslint-disable prettier/prettier */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';
import { Appointment, AppointmentPayload, PaymentMethod, UserPayload } from './types';

export const appointmentApi = createApi({
  baseQuery,
  reducerPath: 'appointmentApi',
  tagTypes: ['Appointment'],
  endpoints: (builder) => ({
    createAppointmentPayment: builder.mutation<void, string>({
      query: (appointmentId) => ({
        url: `/v1/appointments/${appointmentId}/payments`,
        method: 'POST',
      }),
    }),
    createPaymentSession: builder.mutation<string, void>({
      query: () => ({ url: 'v1/paymentSessions', method: 'POST' }),
    }),
    getPaymentMethods: builder.mutation<PaymentMethod[], string>({
      query: (userId) => ({ url: `/v1/customers/${userId}/paymentMethods`, method: 'GET' }),
    }),
    createAppointment: builder.mutation<Appointment, AppointmentPayload>({
      query: (appointmentData) => ({
        url: `/v1/appointments`,
        method: 'POST',
        body: appointmentData,
      }),
    }),
    getAppointment: builder.query<Appointment, string>({
      query: (appointmentId) => ({ url: `/v1/appointments/${appointmentId}` }),
      providesTags: ['Appointment'],
    }),
    cancelAppointment: builder.mutation<void, string>({
      query: (appointmentId) => ({
        url: `/v1/appointments/${appointmentId}/cancelled`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useCreateAppointmentPaymentMutation,
  useCreatePaymentSessionMutation,
  useGetPaymentMethodsMutation,
  useCreateAppointmentMutation,
  useGetAppointmentQuery,
  useCancelAppointmentMutation,
} = appointmentApi;

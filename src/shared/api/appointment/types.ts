/* eslint-disable prettier/prettier */
// import { Service } from '../barber/types';

export interface PaymentMethod {
  id: string;
  last4: string;
  brand: string;
  exp_month: number;
  exp_year: number;
}

export interface Appointment {
  date: string;
  subtotal: number;
  tip: number;
  name: string;
  email: string;
  id: string;
  shop: {
    id: string;
    name: string;
    address_1: string;
    address_2: string;
    locality: string;
    region: string;
    postal_code: string;
    email_address: string;
    phone_number: string;
  };
  barber: {
    first_name: string;
    last_name: string;
    profile_image_url: string;
    profile_url: string;
  };
  barber_name: string;
  duration: number;
  taxes: number;
  fee: number;
  status: string;
  payment_status: string;
  cancellation_type: string;
  cancellation_amount: number;
  shop_id: string;
  barber_id: string;
  user_id: string;
  cancellation_policy: {
    late_offset: number;
    no_show_fixed_fee: number;
    no_show_variable_fee: string;
    no_show_offset: number;
    late_fixed_fee: number;
    late_variable_fee: string;
  };
  payment_method: PaymentMethod;
  // services: Service[];
  reason: string;
  url: string;
  type: string;
  booking_id: string;
}

export enum AppointmentType {
  SCHEDULED = 'scheduled',
  AD_HOC = 'ad-hoc',
}

export enum PaymentType {
  CARD = 'card',
  CASH = 'cash',
}

export interface AppointmentPayload {
  date: string;
  tip: number;
  email?: string | null;
  first_name: string;
  last_name?: string | null;
  phone_number: string;
  payment_type: PaymentType;
  type: AppointmentType;
  shop_id: string;
  barber_id: string;
  user_id: string;
  setup_intent_id: string;
  services: string[];
}

export interface User {
  _id: string;
  firstname: string | null;
  midname: string | null;
  lastname: string | null;
  email: string | null;
  phone: string | null;
  password: string | null;
  role: string | null;
  gender: string | null;
  dob: string | null;
  is_active: boolean | null;
  is_email_verified: boolean | null;
  is_phone_verified: boolean | null;
  read: boolean | null;
  edit: boolean | null;
  delete: boolean | null;
  default_app_name: string | null;
  activation_date: string | null;
  app_name: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  fullname: string | null;
}

export interface UserPayload {
  _id: string;
  firstname: string | null;
  midname: string | null;
  lastname: string | null;
  email: string | null;
  phone: string | null;
  password: string | null;
  role: string | null;
  gender: string | null;
  dob: string | null;
  is_active: boolean | null;
  is_email_verified: boolean | null;
  is_phone_verified: boolean | null;
  read: boolean | null;
  edit: boolean | null;
  delete: boolean | null;
  default_app_name: string | null;
  activation_date: string | null;
  app_name: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  fullname: string | null;
}

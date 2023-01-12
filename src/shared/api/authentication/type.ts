/* eslint-disable prettier/prettier */
export interface UserRegisterType {
  firstname: any;
  lastname: any;
  email: any;
  phone: any;
  password: any;
  confirmPassword: any;
  role: any;
}

export interface UserLoginType {
  email: any;
  password: any;
  role: any;
}

export interface UserPayload {
  message?: any;
  error: {
    message?: any;
  };
  data: {
    _id: string | null;
    firstname: string;
    midname?: string;
    lastname?: string;
    fullname: string;
    email: string;
    phone: string;
    role: string;
    gender?: string;
    dob?: string;
    token?: string;
    message?: any;
    error?: any;
  };
}

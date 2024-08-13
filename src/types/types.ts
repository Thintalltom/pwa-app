export interface User 
{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const initialUser: User = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export interface Logininfo {
    email: string;
    password: string;
}

export const initialLogin: Logininfo = {
  email: '',
  password: ''
}

export interface UserState {
  [key: string]: any;
}

export interface PostData {
  [key: string]: any;
}
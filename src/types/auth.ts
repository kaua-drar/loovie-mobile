import {
  signUpFirstStepSchema,
  signUpSecondStepSchema,
  signUpThirdStepSchema,
} from '@/validators';
import { AxiosResponse, AxiosResponseHeaders } from 'axios';

export type LoginParams = {
  login: string;
  password: string;
};

export type SignUpValues = typeof signUpFirstStepSchema.__outputType &
  typeof signUpSecondStepSchema.__outputType &
  typeof signUpThirdStepSchema.__outputType;

export type SignUpParams = {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  birthday: Date;
  password: string;
};

export type AuthResponse = AxiosResponse & {
  headers: {
    'access-token': string;
  } & AxiosResponseHeaders;
};

import { getToken, saveToken } from '@/helpers';
import { api } from '@/services';
import { AuthResponse, LoginParams, SignUpParams, User } from '@/types';

export const loginRequest = async (params: LoginParams) => {
  const {
    data,
    headers: { authorization },
  } = await api.post<User, AuthResponse>('/login', { user: params });

  const token = authorization.split('Bearer ')[1];
  await saveToken(token);

  return data;
};

export const signUpRequest = async (params: SignUpParams) => {
  const {
    data,
    headers: { authorization },
  } = await api.post<User, AuthResponse>('/signup', { user: params });

  const token = authorization.split('Bearer ')[1];
  await saveToken(token);

  return data;
};

export const meRequest = async () => {
  const token = await getToken();

  if (!token) {
    return null;
  }

  api.defaults.headers.Authorization = `Bearer ${token}`;

  const { data } = await api.get<User>('/me');

  return data;
};

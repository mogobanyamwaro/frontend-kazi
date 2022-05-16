import axios from 'axios';
const API_URL = process.env.REACT_APP_NX_BACKEND_URL;

export enum UserRoles {
  EMPLOYER = 'EMPLOYER',
  EMPLOYEE = 'EMPLOYEE',
}

export interface IRegisterInput {
  username?: string;
  email: string;
  password: string;
  role: UserRoles;
  firstName?: string;
  lastName?: string;
}

export interface ILoginInput {
  email?: string;
  password: string;
  username?: string;
  phone?: string;
}

export interface ICheckIfRegisteredInput {
  email: string;
}

const register = (input: IRegisterInput) => {
  return axios.post(`${API_URL}/auth/register`, input);
};

const login = async (input: ILoginInput) => {
  const res = await axios.post(`${API_URL}/auth/login`, input);
  return res.data.result;
};

const refreshToken = async () => {
  const res = await axios.get(`${API_URL}/auth/refresh-token`);
  if (res.data.result) {
    localStorage.setItem('tokens', JSON.stringify(res.data.tokens));
  }
  return res.data.result;
};

const logout = () => {
  localStorage.removeItem('tokens');
};

const checkEmail = async (email: string) => {
  const response = await axios.get(`${API_URL}/auth/check-email/${email}`);
  if (response) {
    return response.data;
  }
};

export const AuthService = {
  register,
  login,
  refreshToken,
  logout,
  checkEmail,
};

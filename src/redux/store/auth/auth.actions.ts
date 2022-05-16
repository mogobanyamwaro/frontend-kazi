import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../../wrapper';
import {
  AuthService,
  ICheckIfRegisteredInput,
  ILoginInput,
  IRegisterInput,
} from './auth.service';

export const register = createAsyncThunk(
  'auth/register',
  async (input: IRegisterInput, thunkApi) => {
    try {
      const response = await AuthService.register(input);
      return response.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(setMessage({ message }));
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (input: ILoginInput, thunkApi) => {
    try {
      const data = await AuthService.login(input);
      return data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(setMessage(message));
      return thunkApi.rejectWithValue(message);
    }
  }
);
export const checkIfRegistered = createAsyncThunk(
  'auth/checkIfRegistered',
  async (input: ICheckIfRegisteredInput, thunkApi) => {
    try {
      const data = await AuthService.checkEmail(input.email);
      return data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(setMessage(message));
      return thunkApi.rejectWithValue(message);
    }
  }
);
export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, thunkApi) => {
    try {
      const data = await AuthService.refreshToken();
      return data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(setMessage(message));
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  AuthService.logout();
});

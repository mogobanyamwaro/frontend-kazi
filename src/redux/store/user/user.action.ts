import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../../wrapper';
import UserService, { IProfileInput } from './user.service';

export const getCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async (_, thunkApi) => {
    try {
      const data = await UserService.getCurrentUser();
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

export const getEmployees = createAsyncThunk(
  'user/getEmployees',
  async (_, thunkApi) => {
    try {
      const data = await UserService.getEmployees();
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

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (input: IProfileInput, thunkApi) => {
    try {
      const data = await UserService.updateProfile(input);
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
export const createSkills = createAsyncThunk(
  'user/create/skills',
  async (input: any, thunkApi) => {
    try {
      const data = await UserService.createSkills(input);
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
export const getMySkills = createAsyncThunk(
  'user/skill/getMySkills',
  async (_, thunkApi) => {
    try {
      const data = await UserService.getMySkills();
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

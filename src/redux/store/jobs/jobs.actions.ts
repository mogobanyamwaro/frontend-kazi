import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../../wrapper';

import { jobsService } from './jobs.service';

export const createJob = createAsyncThunk(
  'jobs/createJob',
  async (input: any, thunkApi) => {
    try {
      const data = await jobsService.createJob(input);
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

export const getAllJobs = createAsyncThunk(
  'jobs/getAllJobs',
  async (_, thunkApi) => {
    try {
      const data = await jobsService.getAllJobs();
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

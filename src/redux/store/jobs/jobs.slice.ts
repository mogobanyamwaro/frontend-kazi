import { createSlice } from '@reduxjs/toolkit';
import { parserErrorMessage } from '../../../helpers/response-error.parser';
import { createJob, getAllJobs } from './jobs.actions';
export interface JobsState {
  loading: boolean;
  error: string | null;
  jobs: [];
  job: [];
}

const slice = createSlice({
  name: 'jobs',
  initialState: {
    loading: false,
    error: null,
    jobs: [],
    job: [],
  } as JobsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.job = action.payload;
      })
      .addCase(createJob.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Error creating a job';
      })
      .addCase(getAllJobs.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.jobs = action.payload;
      })
      .addCase(getAllJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Error fetching jobs';
      });
  },
});

export const jobsReducer = slice.reducer;

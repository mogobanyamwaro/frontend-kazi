import { createSlice } from '@reduxjs/toolkit';
import { parserErrorMessage } from '../../../helpers/response-error.parser';
import {
  getCurrentUser,
  updateProfile,
  createSkills,
  getMySkills,
} from './user.action';

export interface UserState {
  loading: boolean;
  error: string | null;
  userData: {};
  Employee: any;
  updatingProfile: boolean;
  skills: [];
}

const slice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    error: null,
    userData: {},
    Employee: {},
    updatingProfile: false,
    skills: {},
  } as UserState,
  reducers: {
    unsetUser: (state) => {
      state.Employee = null;
      state.userData = {};
    },
    unsetUpdateProfileError: (state) => {
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userData = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Error fetching User';
      })
      .addCase(updateProfile.pending, (state, action) => {
        state.updatingProfile = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.updatingProfile = false;
        state.error = null;
        state.userData = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.updatingProfile = false;
        state.error = parserErrorMessage(action.payload);
      })
      .addCase(createSkills.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSkills.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.skills = action.payload;
      })
      .addCase(createSkills.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.payload);
      })
      .addCase(getMySkills.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMySkills.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.skills = action.payload;
      })
      .addCase(getMySkills.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.payload);
      });
  },
});

export const { unsetUser } = slice.actions;
export const userReducer = slice.reducer;

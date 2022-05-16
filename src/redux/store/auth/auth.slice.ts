import { parserErrorMessage } from '../../../helpers/response-error.parser';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, register, logout } from './auth.actions';

interface ID {
  accessToken: string;
}

export interface AuthState {
  _id: ID | null;
  loading: boolean;
  error: string | null;
  sucess: boolean;
}

const initialState: AuthState = {
  _id: null,
  loading: false,
  error: '',
  sucess: false,
};

const authSlice = createSlice({
  name: 'auth',

  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<ID>) => {
      state._id = action.payload;
    },
    unsetToken: (state) => {
      state._id = null;
    },
    setAuthSuccess: (state, action: PayloadAction<boolean>) => {
      state.sucess = action.payload;
    },
    unsetAuthError: (state) => {
      state.error = '';
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state._id = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      })
      .addCase(register.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.sucess = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      });
  },
});

export const { setToken, unsetToken, setAuthSuccess, unsetAuthError } =
  authSlice.actions;

export const authReducer = authSlice.reducer;

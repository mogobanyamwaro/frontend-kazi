import { isAsyncThunkAction } from '@reduxjs/toolkit';
export const refreshTokenMiddleware =
  (dispatch: any) => (next: any) => async (action: any) => {
    if (isAsyncThunkAction(action)) {
      const accessTokenExpiry = localStorage.getItem('accessTokenExpiresAt');
      if (accessTokenExpiry) {
        const now = new Date().getTime();
        const timeDiff = now - new Date(accessTokenExpiry).getTime();
        if (timeDiff < 600000) {
          //   Refresh token
          // await dispatch(refreshToken);
        }
      }
    }
    next(action);
  };

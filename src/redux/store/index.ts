import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';
import { userReducer } from './user';
import { refreshTokenMiddleware } from '../../middlewares/refreshToken';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['_id'],
};

const reducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: userReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .prepend(refreshTokenMiddleware)
      .concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

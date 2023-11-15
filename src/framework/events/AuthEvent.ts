import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import User, { AuthState } from '../../business/domain/User';
import di from '../../di';
import { AuthLoginState } from '../slices/AuthSlice';

export const AuthEvents = () => {
  const loginEvent = createAsyncThunk(
    'user/login',
    async (auth: AuthState, thunkAPI) => {
      const { dispatch } = thunkAPI;
      dispatch(di.loginUseCase.login(auth));
    }
  );

  const handlePending = (state: AuthLoginState) => {
    state.isLogin = false;
    state.isLoading = true;
    state.error = null;
  };

  const handleFulfilled = (state: AuthLoginState, action: PayloadAction<User>) => {
    state.isLogin = true;
    state.isLoading = false;
    state.data = action.payload;
  };

  const handleRejected = (state: AuthLoginState, action: PayloadAction<unknown>) => {
    state.isLogin = false;
    state.isLoading = false;
    state.error = action.payload as string;
  };
  return {
    loginEvent,
    handlePending,
    handleFulfilled,
    handleRejected,
  };
};

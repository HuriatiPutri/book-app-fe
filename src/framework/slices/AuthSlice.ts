import { createSlice } from '@reduxjs/toolkit';
import User from '../../business/domain/User';
import di from '../../di';
import { AuthEvents } from '../events/AuthEvent';

export interface AuthLoginState {
    isLogin: boolean;
    data: User | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthLoginState = {
  isLogin: false,
  data: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers:{
    logOut: (state) => {
      state.isLogin = false;
      state.data = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(di.loginUseCase.login.pending, AuthEvents().handlePending)
      .addCase(di.loginUseCase.login.fulfilled, AuthEvents().handleFulfilled)
      .addCase(di.loginUseCase.login.rejected, AuthEvents().handleRejected);
  }
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;




    
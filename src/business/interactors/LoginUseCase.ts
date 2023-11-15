import { createAsyncThunk } from '@reduxjs/toolkit';
import MainNetworkDataSource from '../datasource/network/MainNetworkDataSource';
import { handleUseCaseError } from './HandleUseCaseException';
import User, { AuthState } from '../domain/User';
import AppStorageSource from '../datasource/storage/AppStorageSource';

export default class LoginUseCase {
  constructor(
        private readonly mainNetworkDataSource: MainNetworkDataSource,
        private readonly appStorageSource: AppStorageSource
  ){}

  login = createAsyncThunk('user/login', async (user: AuthState, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try{
      return await this.mainNetworkDataSource.login(user);
    }catch(error: unknown){
      return rejectWithValue(handleUseCaseError(error));
    }
  });

  saveUser = (user: User) => {
    this.appStorageSource.set('user',JSON.stringify(user));
  };

  getUser = async () => {
    return this.appStorageSource.get('auth');
  };

  removeUser = () => {
    this.appStorageSource.remove('auth');
  };
}
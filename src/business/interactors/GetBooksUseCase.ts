import { createAsyncThunk } from '@reduxjs/toolkit';
import MainNetworkDataSource from '../datasource/network/MainNetworkDataSource';
import { handleUseCaseError } from './HandleUseCaseException';

export default class GetBooksUseCase {
  constructor(private readonly mainNetworkDataSource: MainNetworkDataSource){}

  getBooks = createAsyncThunk('book/fetchPosts', async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try{
      return await this.mainNetworkDataSource.getBooks();
    }catch(error: unknown){
      return rejectWithValue(handleUseCaseError(error));
    }
  });
}
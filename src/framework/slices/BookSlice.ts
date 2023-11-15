import { createSlice } from '@reduxjs/toolkit';
// import { fetchAddPost, fetchPosts } from './action';
import Book from '../../business/domain/Post';
import di from '../../di';
import { GetBooksEvents } from '../events/GetBookEvent';

export interface BookState {
  data: Book[];
  isLoading: boolean;
  error: string | null;
}

const initialState: BookState = {
  data: [],
  isLoading: false,
  error: null,
};
  
export const postsSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.data.push(action.payload);
    },
    removePost: (state, action) => {
      state.data = state.data.filter(post => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      const index = state.data.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        di.GetBooksUseCase.getBooks.pending,
        GetBooksEvents().handlePending
      )
      .addCase(
        di.GetBooksUseCase.getBooks.fulfilled, 
        GetBooksEvents().handleFulfilled
      )
      .addCase(
        di.GetBooksUseCase.getBooks.rejected,
        GetBooksEvents().handleRejected
      );
    //   .addCase(fetchAddPost.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(fetchAddPost.fulfilled, (state) => {
    //     state.status = 'idle';
    //   })
    //   .addCase(fetchAddPost.rejected, (state) => {
    //     state.status = 'failed';
    //   });
  }
});

export const { addPost, removePost, updatePost } = postsSlice.actions;
export default postsSlice.reducer;

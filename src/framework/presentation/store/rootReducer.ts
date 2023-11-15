import { combineReducers } from '@reduxjs/toolkit';
import BookReducer from '../../slices/BookSlice';
import UserReducer from '../../slices/AuthSlice';

export const rootReducers = combineReducers({
  user: UserReducer,
  books: BookReducer
});
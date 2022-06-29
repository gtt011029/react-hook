import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userSlice from './models/useSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice
  },
});

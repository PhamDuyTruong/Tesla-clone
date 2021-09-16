import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlide';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
    user: userReducer
  },
});

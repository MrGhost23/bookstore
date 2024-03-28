import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import bookReducer from './slices/bookSlice';
import cartReducer from './slices/cartSlice'


export const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    cart: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
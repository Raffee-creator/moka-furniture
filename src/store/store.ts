import { configureStore } from '@reduxjs/toolkit';
// Change this line to use a dot (.)
import cartReducer from './cartSlice'; 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './api/productApi';
import { categoryApi } from './api/categoryApi';
import { orderApi } from './api/orderApi';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(categoryApi.middleware)
      .concat(orderApi.middleware),
});
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlice'
import sizesReducer from '../features/sizes/sizesSlice';
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    size: sizesReducer,
    cart: cartReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../products/productSlice";

export interface ICart extends IProduct {
  number: number;
}

interface CartState {
  carts: ICart[];
}

const initialState: CartState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addData: IProduct = action.payload;
      const itemIndex = state.carts.findIndex((item) => item.id === addData.id);
      if (itemIndex >= 0) {
        state.carts[itemIndex].number +=1  
      } else {
        const newCart: ICart = {
          ...addData,
          number: 1,
        };
        state.carts = [...state.carts, newCart];
      }
    },
    removeToCart: (state, action) => {
      const nextCartItems = state.carts.filter(
        (item) => item.id !== action.payload
      );
      state.carts = nextCartItems;
    },
    removeSingleItem: (state, action) => {
      const addData: IProduct = action.payload;
      const itemIndex_dec = state.carts.findIndex(
        (item) => item.id === addData.id
      );
      if (state.carts[itemIndex_dec].number >= 1) {
        const newCart: ICart = {
          ...addData,
          number: (state.carts[itemIndex_dec].number -= 1),
        };
      }
    },
  },
});

export const { addToCart, removeToCart, removeSingleItem } = cartSlice.actions;

export default cartSlice.reducer;

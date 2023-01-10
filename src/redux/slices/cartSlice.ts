import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../components/ProductList";

interface ProductCart extends Product {
  quantity: number;
}

export interface CartState {
  products: ProductCart[];
  totalCount: number;
  totalAmount: number;
}

export const initialState: CartState = {
  products: [],
  totalCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const productInCart = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (productInCart) {
        productInCart.quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;

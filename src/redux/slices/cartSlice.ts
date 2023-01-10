import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../components/ProductList";

export interface ProductCart extends Product {
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
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseProduct: (state, action: PayloadAction<Product["id"]>) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );

      if (product) {
        product.quantity++;
      }
    },
    decreaseProduct: (state, action: PayloadAction<Product["id"]>) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );

      if (product) {
        if (product.quantity === 1) {
          product.quantity = 1;
        } else {
          product.quantity--;
        }
      }
    },
    removeProduct: (state, action: PayloadAction<Product["id"]>) => {
      const updatedProducts = state.products.filter(
        (product) => product.id !== action.payload
      );

      state.products = updatedProducts;
    },
  },
});

export const { addProduct, increaseProduct, decreaseProduct, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;

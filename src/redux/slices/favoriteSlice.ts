import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../components/ProductList";

export interface FavoriteState {
  products: Product[];
}

export const initialState: FavoriteState = {
  products: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (product) {
        const index = state.products.indexOf(product);
        if (index > -1) {
          state.products.splice(index, 1);
        }
      } else {
        state.products.push(action.payload);
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

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;

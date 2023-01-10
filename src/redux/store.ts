import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as _useDispatch,
  useSelector as _useSelector,
} from "react-redux";
import { cartListenerMiddleware } from "./middleware";
import cartSlice, { initialState } from "./slices/cartSlice";
import themeSlice from "./slices/themeSlice";

const cartState = JSON.parse(localStorage.getItem("cart") || "null");

const store = configureStore({
  preloadedState: {
    cart: cartState === null ? initialState : cartState,
  },
  reducer: {
    cart: cartSlice,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    cartListenerMiddleware.middleware,
  ],
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useDispatch: () => AppDispatch = _useDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;

import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as _useDispatch,
  useSelector as _useSelector,
} from "react-redux";
import {
  cartListenerMiddleware,
  favoriteListenerMiddleware,
  themeListenerMiddleware,
} from "./middleware";
import cartSlice, {
  initialState as cartInitinalState,
} from "./slices/cartSlice";
import favoriteSlice, {
  initialState as favoriteInitialState,
} from "./slices/favoriteSlice";
import themeSlice, {
  initialState as themeInitialState,
} from "./slices/themeSlice";

const cartState = JSON.parse(localStorage.getItem("cart") || "null");
const favoriteState = JSON.parse(localStorage.getItem("favorite") || "null");
const themeState = JSON.parse(localStorage.getItem("theme") || "null");

const store = configureStore({
  preloadedState: {
    cart: cartState === null ? cartInitinalState : cartState,
    favorite: favoriteState === null ? favoriteInitialState : favoriteState,
    theme: themeState === null ? themeInitialState : themeState,
  },
  reducer: {
    cart: cartSlice,
    favorite: favoriteSlice,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    cartListenerMiddleware.middleware,
    favoriteListenerMiddleware.middleware,
    themeListenerMiddleware.middleware,
  ],
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useDispatch: () => AppDispatch = _useDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;

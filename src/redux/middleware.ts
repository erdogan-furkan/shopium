import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  addProduct,
  decreaseProduct,
  increaseProduct,
  removeProduct,
} from "./slices/cartSlice";
import { toggleFavorite } from "./slices/favoriteSlice";
import { setActiveLang, toggleDarkMode } from "./slices/themeSlice";
import type { RootState } from "./store";

export const cartListenerMiddleware = createListenerMiddleware();
cartListenerMiddleware.startListening({
  matcher: isAnyOf(addProduct, increaseProduct, decreaseProduct, removeProduct),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      "cart",
      JSON.stringify((listenerApi.getState() as RootState).cart)
    ),
});

export const favoriteListenerMiddleware = createListenerMiddleware();
favoriteListenerMiddleware.startListening({
  matcher: isAnyOf(toggleFavorite),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      "favorite",
      JSON.stringify((listenerApi.getState() as RootState).favorite)
    ),
});

export const themeListenerMiddleware = createListenerMiddleware();
themeListenerMiddleware.startListening({
  matcher: isAnyOf(toggleDarkMode, setActiveLang),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      "theme",
      JSON.stringify((listenerApi.getState() as RootState).theme)
    ),
});

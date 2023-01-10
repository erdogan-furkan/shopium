import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addProduct } from "./slices/cartSlice";
import type { RootState } from "./store";

export const cartListenerMiddleware = createListenerMiddleware();
cartListenerMiddleware.startListening({
  matcher: isAnyOf(addProduct),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      "cart",
      JSON.stringify((listenerApi.getState() as RootState).cart)
    ),
});

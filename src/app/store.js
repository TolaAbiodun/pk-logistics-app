import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { deliveryAPI } from "../services/deliveries";
import { loadState } from "./browser-storage";

// Add service to store
export const store = configureStore({
  reducer: {
    [deliveryAPI.reducerPath]: deliveryAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(deliveryAPI.middleware),
  // Restore Previously persisted state
  preloadedState: loadState(),

});

setupListeners(store.dispatch);
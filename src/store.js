import { configureStore } from "@reduxjs/toolkit";
import navSliceReducer from "./Features/navSlice";
export const store = configureStore({
  reducer: {
    nav: navSliceReducer,
  },
});

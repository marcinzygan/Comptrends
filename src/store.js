import { configureStore } from "@reduxjs/toolkit";
import navSliceReducer from "./Features/navSlice";
import constructionReducer from "./Features/constructionSlice";
import animationReducer from "./Features/hideAnimationSlice";

export const store = configureStore({
  reducer: {
    nav: navSliceReducer,
    construction: constructionReducer,
    animation: animationReducer,
  },
});

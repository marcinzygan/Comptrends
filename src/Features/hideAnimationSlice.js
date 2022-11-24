import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayAnimation: true,
};

const animationSlice = createSlice({
  name: "animation",
  initialState,
  reducers: {
    checkScreenSize: (state, data) => {
      if (data.payload > 800) {
        state.displayAnimation = false;
      } else {
        return;
      }
    },
  },
});

export const { checkScreenSize } = animationSlice.actions;
export default animationSlice.reducer;

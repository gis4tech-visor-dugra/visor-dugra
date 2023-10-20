import { createSlice } from "@reduxjs/toolkit";

export const styleSlice = createSlice({
  name: "style",
  initialState: {
    style: [],
  },
  reducers: {
    getLayerStyle: (state, action) => {
      state.style = action.payload;
    },
  },
});

export const { getLayerStyle } = styleSlice.actions;

export default styleSlice.reducer;
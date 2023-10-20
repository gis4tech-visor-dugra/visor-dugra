import { createSlice } from "@reduxjs/toolkit";

export const baselayerSlice = createSlice({
  name: "baselayer",
  initialState: {
    baselayer: "",
  },
  reducers: {
    getBaseLayer: (state, action) => {
      state.baselayer = action.payload;
    },
  },
});

export const { getBaseLayer } = baselayerSlice.actions;

export default baselayerSlice.reducer;
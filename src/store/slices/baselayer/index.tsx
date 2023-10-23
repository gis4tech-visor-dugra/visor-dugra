import { createSlice } from "@reduxjs/toolkit";

export const baselayerSlice = createSlice({
  name: "baselayer",
  initialState: {
    baselayer: "",
    title: ""
  },
  reducers: {
    getBaseLayer: (state, action) => {
      state.baselayer = action.payload.baselayer;
      state.title = action.payload.title;
    },
  },
});

export const { getBaseLayer } = baselayerSlice.actions;

export default baselayerSlice.reducer;

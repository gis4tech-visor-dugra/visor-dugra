import { createSlice } from "@reduxjs/toolkit";

export const layerSlice = createSlice({
  name: "layer",
  initialState: {
    layer: "Densidad_Res",
  },
  reducers: {
    getLayer: (state, action) => {
      state.layer = action.payload;
    },
  },
});

export const { getLayer } = layerSlice.actions;

export default layerSlice.reducer;
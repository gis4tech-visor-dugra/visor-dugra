import { createSlice } from "@reduxjs/toolkit";

export const layerSlice = createSlice({
  name: "layer",
  initialState: {
    layer: "Densidad_Res",
    title: "Densidad Residencial",
    units: "hab/m",
    description: "Densidad de población residencial por manzana",
  },
  reducers: {
    getLayer: (state, action) => {
      state = {...state, ...action.payload};
      return state;
    },
  },
});

export const { getLayer } = layerSlice.actions;

export default layerSlice.reducer;
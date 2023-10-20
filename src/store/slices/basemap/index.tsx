import { createSlice } from "@reduxjs/toolkit";

export const basemapSlice = createSlice({
  name: "basemap",
  initialState: {
    basemap: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  reducers: {
    getBasemap: (state, action) => {
      state.basemap = action.payload;
    },
  },
});

export const { getBasemap } = basemapSlice.actions;

export default basemapSlice.reducer;
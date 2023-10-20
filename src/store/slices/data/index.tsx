import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
    getLayerData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getLayerData } = dataSlice.actions;

export default dataSlice.reducer;
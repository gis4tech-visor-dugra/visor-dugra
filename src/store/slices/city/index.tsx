import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "city",
  initialState: {
    city: "Granada",
    name: "GR",
  },
  reducers: {
    getCity: (state, action) => {
      state.city = action.payload;
    },
    getName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { getCity, getName } = citySlice.actions;

export default citySlice.reducer;
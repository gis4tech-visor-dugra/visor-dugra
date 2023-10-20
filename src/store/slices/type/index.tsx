import { createSlice } from "@reduxjs/toolkit";

export const typeSlice = createSlice({
  name: "type",
  initialState: {
    type: "",
  },
  reducers: {
    getType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { getType } = typeSlice.actions;

export default typeSlice.reducer;
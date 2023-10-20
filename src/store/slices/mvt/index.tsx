import { createSlice } from "@reduxjs/toolkit";

export const mvtSlice = createSlice({
  name: "mvt",
  initialState: {
    mvt: "",
  },
  reducers: {
    getMvt: (state, action) => {
      state.mvt = action.payload;
    },
  },
});

export const { getMvt } = mvtSlice.actions;

export default mvtSlice.reducer;
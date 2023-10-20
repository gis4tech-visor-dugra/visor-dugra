import { configureStore } from "@reduxjs/toolkit";
// Import the reducer
import layer from "./slices/layer/index";
import data from "./slices/data/index";
import basemap from "./slices/basemap";
import baselayer from "./slices/baselayer";
import mvt from "./slices/mvt";
import type from "./slices/type";
import style from "./slices/style";
import city from "./slices/city";

export default configureStore({
  reducer: {
    layer,
    data,
    basemap,
    baselayer,
    mvt,
    type,
    style,
    city,
  },
});
// Importando la función 'configureStore' de Redux Toolkit para configurar el store.
import { configureStore } from "@reduxjs/toolkit";

// Importando reducers de diferentes slices.
import layer from "./slices/layer/index";
import data from "./slices/data/index";
import basemap from "./slices/basemap";
//import baselayer from "./slices/baselayer";
import mvt from "./slices/mvt";
import type from "./slices/type";
import style from "./slices/style";
import city from "./slices/city";

// Exportando la configuración del store con todos los reducers importados.
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

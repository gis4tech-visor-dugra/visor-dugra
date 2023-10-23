// Importando 'createSlice' desde Redux Toolkit para crear un slice del store.
import { createSlice } from "@reduxjs/toolkit";

// Creando un slice para 'basemap' con su estado inicial y reducers.
export const basemapSlice = createSlice({
  // Nombre del slice.
  name: "basemap",
  // Estado inicial del slice. Inicialmente tiene un valor por defecto para 'basemap' que corresponde a una URL de OpenStreetMap.
  initialState: {
    basemap: "https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
  },
  // Reducers que manipulan el estado del slice.
  reducers: {
    // Reducer para actualizar el valor de 'basemap'.
    getBasemap: (state, action) => {
      state.basemap = action.payload;
    },
  },
});

// Exportando las acciones generadas por el slice.
export const { getBasemap } = basemapSlice.actions;

// Exportando el reducer del slice 'basemap' para ser utilizado en el store.
export default basemapSlice.reducer;

// Importando 'createSlice' desde Redux Toolkit para crear un slice del store.
import { createSlice } from "@reduxjs/toolkit";

// Creando un slice para 'city' con su estado inicial y reducers.
export const citySlice = createSlice({
  // Nombre del slice.
  name: "city",
  // Estado inicial del slice, estableciendo valores predeterminados para 'city' y 'name'.
  initialState: {
    city: "Granada",
    name: "GR",
  },
  // Reducers que manipulan el estado del slice.
  reducers: {
    // Reducer para actualizar el valor de 'city'.
    getCity: (state, action) => {
      state.city = action.payload;
    },
    // Reducer para actualizar el valor de 'name'.
    getName: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Exportando las acciones generadas por el slice.
export const { getCity, getName } = citySlice.actions;

// Exportando el reducer del slice 'city' para ser utilizado en el store.
export default citySlice.reducer;

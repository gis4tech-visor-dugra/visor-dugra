// Importando 'createSlice' de Redux Toolkit para facilitar la creación de un slice del store.
import { createSlice } from "@reduxjs/toolkit";

// Creando un slice para 'data' con su estado inicial y reducers.
export const dataSlice = createSlice({
  // Nombre del slice.
  name: "data",
  // Estado inicial del slice: una lista vacía para almacenar 'data'.
  initialState: {
    data: [],
  },
  // Reducers para actualizar el estado del slice.
  reducers: {
    // Reducer que actualiza el valor de 'data' con la información del layer.
    getLayerData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Exportando las acciones generadas por el slice para ser usadas en componentes o servicios.
export const { getLayerData } = dataSlice.actions;

// Exportando el reducer de 'data' para ser combinado en el store principal.
export default dataSlice.reducer;

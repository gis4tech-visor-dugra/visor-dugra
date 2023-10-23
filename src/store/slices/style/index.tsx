import { createSlice } from "@reduxjs/toolkit";

// Estado inicial del slice, donde 'style' es inicializado como una lista vacía.
const initialState = {
    style: [],
};

// Creando un slice para 'style' con su estado inicial y reducers.
export const styleSlice = createSlice({
  // Nombre del slice.
  name: "style",
  // Usando el estado inicial.
  initialState: initialState,
  // Reducers que manipulan el estado del slice.
  reducers: {
    // Reducer para actualizar el valor de 'style' con los estilos del layer.
    getLayerStyle: (state, action) => {
      state.style = action.payload;
    },
    // Reducer para restablecer el valor de 'style' a su valor predeterminado.
    resetLayerStyle: (state) => {
        state.style = [];
    },
  },
});

// Exportando las acciones generadas por el slice para que puedan ser usadas en componentes o servicios.
export const { getLayerStyle, resetLayerStyle } = styleSlice.actions;

// Exportando el reducer del slice 'style' para ser incluido en el store principal.
export default styleSlice.reducer;

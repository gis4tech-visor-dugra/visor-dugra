// Importando 'createSlice' de Redux Toolkit para la creación eficiente de un slice del store.
import { createSlice } from "@reduxjs/toolkit";

// Creando un slice para 'mvt' con su estado inicial y reducers.
export const mvtSlice = createSlice({
  // Nombre del slice.
  name: "mvt",
  // Estado inicial del slice con un valor predeterminado vacío para 'mvt'.
  initialState: {
    mvt: "",
  },
  // Reducers que manipulan el estado del slice.
  reducers: {
    // Reducer para actualizar el valor de 'mvt'.
    getMvt: (state, action) => {
      state.mvt = action.payload;
    },
  },
});

// Exportando las acciones generadas por el slice para ser usadas en otros componentes o servicios.
export const { getMvt } = mvtSlice.actions;

// Exportando el reducer del slice 'mvt' para ser combinado en el store principal.
export default mvtSlice.reducer;

export {}
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getBaseLayer } from "../../store/slices/baselayer";
// import { getMvt } from "../../store/slices/mvt";
// import { getType } from "../../store/slices/type";
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

// export default function BasicSelect() {
//     const dispatch = useDispatch();

//     const handleChange = async (event: SelectChangeEvent) => {
//         const select = event.target as any;
//         const optionTitle = select.options[select.selectedIndex].text;
//         const optionValue = select.value as string;

//         let mvtUrl = "";
//         if (select.options[select.selectedIndex].parentNode.label === "Puntos") {
//             mvtUrl = "_Base_Puntos";
//             dispatch(getType('Point'));
//         } else if (select.options[select.selectedIndex].parentNode.label === "Polilíneas") {
//             mvtUrl = "_Base_Polilineas";
//             dispatch(getType('Polyline'));
//         } else if (select.options[select.selectedIndex].parentNode.label === "Polígonos") {
//             mvtUrl = "_Base_Poligonos";
//             dispatch(getType('Polygon'));
//         }

//         dispatch(getMvt(mvtUrl));
//         dispatch(getBaseLayer({ baselayer: optionValue, title: optionTitle }));
//     };

//   return (
//     <div>
//       <FormControl  sx={{ minWidth: '300px',maxWidth: '300px', blackgroundColor: '#fff',  marginBottom: "10px"}}>
//         <InputLabel htmlFor="grouped-native-select">Capas Base</InputLabel>
//         <Select
//             native
//             id="grouped-native-select"
//             label="Capas Base"
//             onChange={handleChange}
//             style={{ backgroundColor: "#fff", opacity: '100%' }}
//         >
//           <option value={" "}>Blanco</option>
//           <optgroup label="Puntos">
//             <option value={"TRAF_UNI"}>Cruces de 2 calles</option>
//             <option value={"n_cruces"}>Cruces de 4 calles</option>
//             <option value={"ESTAC_BICI_TIPO"}>Estacionamiento de bicicleta</option>
//             <option value={"TAXIS_TIPO"}>Paradas de taxi</option>
//             <option value={"PARADAS_TPTE_TIPO"}>Paradas de transporte público</option>
//             <option value={"MERCADOS_TIPO"}>Mercados</option>
//             <option value={"CENTROS_EMPLEO_TIPO"}>Centros de empleo</option>
//             <option value={"CENTROS_EDUCATIVOS_TIPO"}>Centros educativos</option>

//           </optgroup>
//           <optgroup label="Polilíneas">
//             <option value={"CH"}>Space Syntax (Choice Global)</option>
//             <option value={"CHr400m"}>Space Syntax (Choice 400m)</option>
//             <option value={"CHr800m"}>Space Syntax (Choice 800m)</option>
//             <option value={"INT"}>Space Syntax (Integracion Global)</option>
//             <option value={"INTr400m"}>Space Syntax (Integracion 400m)</option>
//             <option value={"INTr800m"}>Space Syntax (Integracion 800m)</option>
//             <option value={"PRD_TIPO"}>Direccionalidad de rutas peatonales (PRD)</option>
//             <option value={"ACCESO_BICI_TIPO"}>Accesos para bicicleta</option>
//             <option value={"INTERMODALIDAD_TIPO"}>Intermodalidad</option>
//             <option value={"I19_TIPO"}>Peatonalidad y sección</option>
//             <option value={"RUTAS_COLEGIOS_TIPO"}>Rutas hacia los colegios</option>
//             <option value={"MODOTPTE"}>Modo de transporte</option>
//             <option value={"A00_FreqAn"}>Frecuencia</option>
//             <option value={"CONTINUIDAD_TIPO"}>Continuidad</option>
//           </optgroup>
//           <optgroup label="Polígonos">
//             <option value={"Pob_Edific"}>Población por edificio</option>
//             <option value={"RNT_HOG_19"}>Renta bruta media por hogar (€)</option>
//             <option value={"MixedUsesI"}>Índice de usos mixtos por manzana</option>
//             <option value={"NUM_PB_FAC"}>Locales permeables (planta baja)</option>
//             <option value={"Esp_Verdes"}>Espacios verdes</option>
            
//           </optgroup>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
import React, { useState, useEffect, ChangeEvent } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getLayer} from "../../store/slices/layer";
import { getLayerData } from "../../store/slices/data";
import {getLayerStyle} from "../../store/slices/style";

import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [baselayer, setBaselayer] = useState('');
  const [mvt, setMvt] = useState('');
  const [type, setType] = useState('');
  const dispatch = useDispatch();

  const handleChange = async (event: SelectChangeEvent) => {
    const select = event.target as any;
    setBaselayer(select.value as string);
    setMvt(select.value as string);
    let mvtUrl = "";
    if (select.options[select.selectedIndex].parentNode.label === "Comunidades Autónomas") {
      mvtUrl = "_Base_Puntos"
      dispatch(getLayer('Comunidades_Autonomas'))};
    // } else if (select.options[select.selectedIndex].parentNode.label === "Polilíneas") {
    //   mvtUrl = "_Base_Polilineas"
    //   dispatch(getLayer('Polyline'));
    // } else if (select.options[select.selectedIndex].parentNode.label === "Polígonos") {
    //   mvtUrl = "_Base_Poligonos"
    //   dispatch(getLayer('Polygon'));
    // }
    // dispatch(getMvt(mvtUrl));
    // dispatch(getBaseLayer(event.target.value as string));
  

  return (
    <div>
      <FormControl  sx={{ minWidth: '300px',maxWidth: '300px', blackgroundColor: '#fff',  marginBottom: "10px"}}>
        <InputLabel htmlFor="grouped-native-select">Capas Base</InputLabel>
        <Select 
          native 
          defaultValue={baselayer} 
          id="grouped-native-select" 
          label="Capas Base"
          onChange={handleChange}
          style={{backgroundColor: "#fff", opacity:'100%'}}

//En el siguiente bloque de código tendremos que incluir cada opción del desplegable escribiendo el nombre del campo (naranja) y el texto que reflejará el visor (blanco)

        >
          <option aria-label="None" value="" />
            <option value={" "}>Blanco</option>
          <optgroup label="Comunidades Autónomas">
            <option value={"TRAF_UNI"}>Cruces de 2 calles</option>
            <option value={"n_cruces"}>Cruces de 4 calles</option>
            <option value={"ESTAC_BICI_TIPO"}>Estacionamiento de bicicleta</option>
            <option value={"TAXIS_TIPO"}>Paradas de taxi</option>
            <option value={"PARADAS_TPTE_TIPO"}>Paradas de transporte público</option>
            <option value={"MERCADOS_TIPO"}>Mercados</option>
            <option value={"CENTROS_EMPLEO_TIPO"}>Centros de empleo</option>
            <option value={"CENTROS_EDUCATIVOS_TIPO"}>Centros educativos</option>

          </optgroup>
          <optgroup label="Polilíneas">
            <option value={"CH"}>Space Syntax (Choice Global)</option>
            <option value={"CHr400m"}>Space Syntax (Choice 400m)</option>
            <option value={"CHr800m"}>Space Syntax (Choice 800m)</option>
            <option value={"INT"}>Space Syntax (Integracion Global)</option>
            <option value={"INTr400m"}>Space Syntax (Integracion 400m)</option>
            <option value={"INTr800m"}>Space Syntax (Integracion 800m)</option>
            <option value={"PRD_TIPO"}>Direccionalidad de rutas peatonales (PRD)</option>
            <option value={"ACCESO_BICI_TIPO"}>Accesos para bicicleta</option>
            <option value={"INTERMODALIDAD_TIPO"}>Intermodalidad</option>
            <option value={"I19_TIPO"}>Peatonalidad y sección</option>
            <option value={"RUTAS_COLEGIOS_TIPO"}>Rutas hacia los colegios</option>
            <option value={"MODOTPTE"}>Modo de transporte</option>
            <option value={"A00_FreqAn"}>Frecuencia</option>
            <option value={"CONTINUIDAD_TIPO"}>Continuidad</option>
          </optgroup>
          <optgroup label="Polígonos">
            <option value={"Pob_Edific"}>Población por edificio</option>
            <option value={"RNT_HOG_19"}>Renta bruta media por hogar (€)</option>
            <option value={"MixedUsesI"}>Índice de usos mixtos por manzana</option>
            <option value={"NUM_PB_FAC"}>Locales permeables (planta baja)</option>
            <option value={"Esp_Verdes"}>Espacios verdes</option>
            
          </optgroup>
        </Select>
      </FormControl>
    </div>
  );
}
// type State = {
//   city: {
//     name: string;
//   };
// };

// const indicatorTitles: Record<string, string> = {
//   Blanco: 'Blanco',
//   Densidad_Res: 'Densidad Residencial',
//   NivelS_Origen: 'Nivel socioecónomico bruto en origen',
//   NivelS_Ruta: 'Nivel socioeconómico bruto medio en la ruta',
//   Pendiente: 'Pendiente',
//   PRD: 'Direccionalidad de rutas peatonales (PRD)',
//   Usos_Mixtos: 'Índice de usos mixtos',
//   Num_Cruces_2C: 'Número de cruces',
//   Num_Cruces_4C: 'Número de cruces (4 calles)',
//   Fachadas_Act: 'Fachadas activas',
//   Accesos_PB: 'Accesos planta baja',
//   Nivel_Sombra: 'Nivel de sombra',
//   Acceso_Bici: 'Acceso a la red ciclista',
//   Estac_Bici: 'Puestos de estacionamiento de bicicletas',
//   Parada_Transp: 'Paradas transporte',
//   Servicios_Bas: 'Servicios básicos',
//   Esp_Libres: 'Espacios libres',
//   Centro_Empleo: 'Centros de empleo',
//   Intermodal: 'Intermodalidad en la ruta',
//   Ancho_Calle: 'Ancho de calle',
//   Por_CPeatonal: 'Porcentaje de calles peatonales',
//   Int_Global: 'SS_Integration (Global)',
//   Int_400m: 'SS_Integration (400m)',
//   Int_800m: 'SS_Integration (800m)',
//   Cho_Global: 'SS_Choice (Global)',
//   Cho_400m: 'SS_Choice (400m)',
//   Cho_800m: 'SS_Choice (800m)',
//   TipoDestin: 'Tipo de Destino',
//   FreqAnda: 'Frecuencia de desplazamiento caminando',
//   FreqBici: 'Frecuencia de uso bicicleta',
//   FreqCocheM: 'Frecuencia de uso de coche o moto',
//   FreqTransp: 'Frecuencia de uso de transporte público'
// };

// export default function BasicSelect() {
//   const [indicadores, setIndicadores] = useState<string>('Densidad_Res');
  
//   const dispatch = useDispatch();
//   const city = useSelector((state: State) => state.city.name);

//   useEffect(() => {
//     fetchData();
//     fetchStyle();
//   }, [city]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(`./data/Indicadores_${city}.json`);
//       const data = await response.json();
//       const newArray = [];
//       for (const obj of data) {
//         newArray.push(obj.Densidad_Res);
//       }
//       dispatch(getLayerData(newArray));
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const fetchStyle = async () => {
//     try {
//       const response = await fetch(`./data/indicatorStyles_${city}.json`);
//       const data = await response.json();
//       dispatch(getLayerStyle(data));
//       dispatch
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const handleChange = async (event: SelectChangeEvent) => {
//     const value = event.target.value as string;
//     setIndicadores(value);
    
//     dispatch(getLayer({ layer: value }));
//     const response = await fetch(`./data/Indicadores_${city}.json`);
//     const responseStyle = await fetch(`./data/indicatorStyles_${city}.json`);
//     const data = await response.json();
//     const dataStyle = await responseStyle.json();
    
//     const newArray: any[] = data.map((obj: any) => obj[value]);
    
//     // Extract the unit from the style data
//     const unit = dataStyle[value] && dataStyle[value][0] && dataStyle[value][0].unit;
//     if (unit) {
//       dispatch(getLayer({ units: unit }));
//     }
    
//     dispatch(getLayer({ title: indicatorTitles[value] || value }));
//     dispatch(getLayerData(newArray));
//     dispatch(getLayerStyle(dataStyle));
//   };

//   return (
//     <div>
//       <FormControl sx={{ minWidth: '300px', maxWidth: '300px', backgroundColor: '#fff', marginBottom: "10px" }}>
//         <InputLabel id="indicadores-label">Indicadores</InputLabel>
//         <Select
//           labelId="indicadores"
//           id="indicadores"
//           value={indicadores}
//           label="Indicadores"
//           onChange={handleChange}
//           style={{ backgroundColor: "#fff", opacity: '100%' }}
//         >
//           {Object.entries(indicatorTitles).map(([key, title]) => (
//             <MenuItem key={key} value={key}>{title}</MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }

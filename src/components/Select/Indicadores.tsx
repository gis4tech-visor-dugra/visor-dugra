import React, { useState, useEffect, ChangeEvent } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getLayer} from "../../store/slices/layer";
import { getLayerData } from "../../store/slices/data";
import {getLayerStyle} from "../../store/slices/style";

import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [indicadores, setIndicadores] = useState('Densidad_Res');
  const dispatch = useDispatch();
  let city = useSelector((state:any) => state.city.name);
  
  useEffect(() => {
    fetchData();
    fetchStyle();
  }, [city]);

  async function fetchData() {
    try {
      const response = await fetch(`./data/Indicadores_${city}.json`);
      const data = await response.json();
      const newArray = [];
      for (const obj of data) {
        newArray.push(obj.Densidad_Res);
      }
      dispatch(getLayerData(newArray));
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchStyle() {
    try {
      const response = await fetch(`./data/indicatorStyles_${city}.json`);
      const data = await response.json();
      dispatch(getLayerStyle(data));
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = async (event: SelectChangeEvent) => {
    setIndicadores(event.target.value as string);
    dispatch(getLayer(event.target.value as string));

    const response = await fetch(`./data/Indicadores_${city}.json`);
    const responseStyle = await fetch(`./data/indicatorStyles_${city}.json`);
    const data = await response.json();
    const dataStyle = await responseStyle.json();
    const newArray = [];
    
    if (event.target.value === "Densidad_Res") {
      for (const obj of data) {
        newArray.push(obj.Densidad_Res);
      }
    } else if (event.target.value === "NivelS_Origen") {
      for (const obj of data) {
        newArray.push(obj.NivelS_Origen);
      }
    }
    else if (event.target.value === "NivelS_Ruta") {
      for (const obj of data) {
        newArray.push(obj.NivelS_Ruta);
      }
    }
    else if (event.target.value === "Pendiente") {
      for (const obj of data) {
        newArray.push(obj.Pendiente);
      }
    }
    else if (event.target.value === "PRD") {
      for (const obj of data) {
        newArray.push(obj.PRD);
      }
    }
    else if (event.target.value === "Usos_Mixtos") {
      for (const obj of data) {
        newArray.push(obj.Usos_Mixtos);
      }
    }
    else if (event.target.value === "Num_Cruces_2C") {
      for (const obj of data) {
        newArray.push(obj.Num_Cruces_2C);
      }
    }
    else if (event.target.value === "Num_Cruces_4C") {
      for (const obj of data) {
        newArray.push(obj.Num_Cruces_4C);
      }
    }
    else if (event.target.value === "Fachadas_Act") {
      for (const obj of data) {
        newArray.push(obj.Fachadas_Act);
      }
    }
    else if (event.target.value === "Accesos_PB") {
      for (const obj of data) {
        newArray.push(obj.Accesos_PB);
      }
    }
    else if (event.target.value === "Nivel_Sombra") {
      for (const obj of data) {
        newArray.push(obj.Nivel_Sombra);
      }
    }
    else if (event.target.value === "Acceso_Bici") {
      for (const obj of data) {
        newArray.push(obj.Acceso_Bici);
      }
    }
    else if (event.target.value === "Estac_Bici") {
      for (const obj of data) {
        newArray.push(obj.Estac_Bici);
      }
    }
    else if (event.target.value === "Parada_Transp") {
      for (const obj of data) {
        newArray
        .push(obj.Parada_Transp);
      }
    }
    else if (event.target.value === "Servicios_Bas") {
      for (const obj of data) {
        newArray.push(obj.Servicios_Bas);
      }
    }
    else if (event.target.value === "Esp_Libres") {
      for (const obj of data) {
        newArray.push(obj.Esp_Libres);
      }
    }
    else if (event.target.value === "Centro_Empleo") {
      for (const obj of data) {
        newArray.push(obj.Centro_Empleo);
      }
    }
    else if (event.target.value === "Intermodal") {
      for (const obj of data) {
        newArray.push(obj.Intermodal);
      }
    }
    else if (event.target.value === "Ancho_Calle") {
      for (const obj of data) {
        newArray.push(obj.Ancho_Calle);
      }
    }
    else if (event.target.value === "Por_CPeatonal") {
      for (const obj of data) {
        newArray.push(obj.Por_CPeatonal);
      }
    }
    else if (event.target.value === "Int_Global") {
      for (const obj of data) {
        newArray.push(obj.Int_Global);
      }
    }
    else if (event.target.value === "Int_400m") {
      for (const obj of data) {
        newArray.push(obj.Int_400m);
      }
    }
    else if (event.target.value === "Int_800m") {
      for (const obj of data) {
        newArray.push(obj.Int_800m);
      }
    }
    else if (event.target.value === "Cho_Global") {
      for (const obj of data) {
        newArray.push(obj.Cho_Global);
      }
    }
    else if (event.target.value === "Cho_400m") {
      for (const obj of data) {
        newArray.push(obj.Cho_400m);
      }
    }
    else if (event.target.value === "Cho_800m") {
      for (const obj of data) {
        newArray.push(obj.Cho_800m);
      }
    }
    else if (event.target.value === "TipoDestin") {
      for (const obj of data) {
        newArray.push(obj.TipoDestin);
      }
    }
    else if (event.target.value === "FreqAnda") {
      for (const obj of data) {
        newArray.push(obj.FreqAnda);
      }
    }
    else if (event.target.value === "FreqBici") {
      for (const obj of data) {
        newArray.push(obj.FreqBici);
      }
    }
    else if (event.target.value === "FreqCocheM") {
      for (const obj of data) {
        newArray.push(obj.FreqCocheM);
      }
    }
    else if (event.target.value === "FreqTransp") {
      for (const obj of data) {
        newArray.push(obj.FreqTransp);
      }
    }
    dispatch(getLayerData(newArray));
    dispatch(getLayerStyle(dataStyle))
  };

  return (
    <div>
      <FormControl sx={{minWidth: '300px',maxWidth: '300px', blackgroundColor: '#fff', marginBottom: "10px",}}>
        <InputLabel id="indicadores-label">Indicadores</InputLabel>
        <Select
          labelId="indicadores"
          id="indicadores"
          value={indicadores}
          label="Indicadores"
          onChange={handleChange}
          style={{backgroundColor: "#fff", opacity:'100%'}}
        >
          <MenuItem value={"Densidad_Res"}>Densidad Residencial</MenuItem>
          <MenuItem value={"NivelS_Origen"}>Nivel socioecónomico bruto en origen</MenuItem>
          <MenuItem value={"NivelS_Ruta"}>Nivel socioeconómico bruto medio en la ruta</MenuItem>
          <MenuItem value={"Pendiente"}>Pendiente</MenuItem>
          <MenuItem value={"PRD"}>Direccionalidad de rutas peatonales (PRD)</MenuItem>
          <MenuItem value={"Usos_Mixtos"}>Índice de usos mixtos</MenuItem>
          <MenuItem value={"Num_Cruces_2C"}>Número de cruces</MenuItem>
          <MenuItem value={"Num_Cruces_4C"}>Número de cruces (4 calles)</MenuItem>
          <MenuItem value={"Fachadas_Act"}>Fachadas activas</MenuItem>
          <MenuItem value={"Accesos_PB"}>Accesos planta baja</MenuItem>
          <MenuItem value={"Nivel_Sombra"}>Nivel de sombra</MenuItem>
          <MenuItem value={"Acceso_Bici"}>Acceso a la red ciclista</MenuItem>
          <MenuItem value={"Estac_Bici"}>Puestos de estacionamiento de bicicletas</MenuItem>
          <MenuItem value={"Parada_Transp"}>Paradas transporte</MenuItem>
          <MenuItem value={"Servicios_Bas"}>Servicios básicos</MenuItem>
          <MenuItem value={"Esp_Libres"}>Espacios libres</MenuItem>
          <MenuItem value={"Centro_Empleo"}>Centros de empleo</MenuItem>
          <MenuItem value={"Intermodal"}>Intermodalidad en la ruta</MenuItem>
          <MenuItem value={"Ancho_Calle"}>Ancho de calle</MenuItem>
          <MenuItem value={"Por_CPeatonal"}>Porcentaje de calles peatonales</MenuItem>
          <MenuItem value={"Int_Global"}>SS_Integration (Global)</MenuItem>
          <MenuItem value={"Int_400m"}>SS_Integration (400m)</MenuItem>
          <MenuItem value={"Int_800m"}>SS_Integration (800m)</MenuItem>
          <MenuItem value={"Cho_Global"}>SS_Choice (Global)</MenuItem>
          <MenuItem value={"Cho_400m"}>SS_Choice (400m)</MenuItem>
          <MenuItem value={"Cho_800m"}>SS_Choice (800m)</MenuItem>
          <MenuItem value={"TipoDestin"}>Tipo de Destino</MenuItem>
          <MenuItem value={"FreqAnda"}>Frecuencia de desplazamiento caminando</MenuItem>
          <MenuItem value={"FreqBici"}>Frecuencia de uso bicicleta</MenuItem>
          <MenuItem value={"FreqCocheM"}>Frecuencia de uso de coche o moto</MenuItem>
          <MenuItem value={"FreqTransp"}>Frecuencia de uso de transporte público</MenuItem>
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

import React, { useState, useEffect} from "react";
// Redux
import { getLayer } from "../../store/slices/layer";
import { getLayerData } from "../../store/slices/data";
import {getLayerStyle} from "../../store/slices/style";

import { useSelector, useDispatch} from "react-redux";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

//Cargamos por defecto la capa Densidad de Residentes
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
      const response = await fetch(`./data/Indicadores_ESP.json`);
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
      const response = await fetch(`./data/indicatorStyles_ESP.json`);
      const data = await response.json();
      dispatch(getLayerStyle(data));
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = async (event: SelectChangeEvent) => {
    setIndicadores(event.target.value as string);
    dispatch(getLayer(event.target.value as string));

    const response = await fetch(`./data/Indicadores_ESP.json`);
    const responseStyle = await fetch(`./data/indicatorStyles_ESP.json`);
    const data = await response.json();
    const dataStyle = await responseStyle.json();
    const newArray = [];
    
    if (event.target.value === "Nombre") {
      for (const obj of data) {
        newArray.push(obj.Densidad_Res);
      }
    dispatch(getLayerData(newArray));
    dispatch(getLayerStyle(dataStyle))
  };

  return (
    <div>
      <FormControl sx={{minWidth: '300px',maxWidth: '300px', blackgroundColor: '#fff', marginBottom: "10px",}}>
        <InputLabel id="indicadores-label">Geoportales</InputLabel>
        <Select
          labelId="indicadores"
          id="indicadores"
          value={indicadores}
          label="Indicadores"
          onChange={handleChange}
          style={{backgroundColor: "#fff", opacity:'100%'}}
        >
          <MenuItem value={"Nombre"}>Nombre</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}}
import React, { useState} from "react";
// Redux
import { getBasemap } from "../../store/slices/basemap";

import { useDispatch} from "react-redux";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [basemap, setBasemap] = useState('');
  const dispatch = useDispatch();

  const handleChange = async (event: SelectChangeEvent) => {
    setBasemap(event.target.value as string);
    dispatch(getBasemap(event.target.value as string));
  };

  return (
    <div>
      <FormControl sx={{ minWidth: '300px',maxWidth: '300px', blackgroundColor: '#fff'}}>
        <InputLabel id="basemap-label">Mapa Base</InputLabel>
        <Select
          labelId="basemap"
          id="basemap"
          value={basemap}
          label="Basemap"
          onChange={handleChange}
          style={{backgroundColor: "#fff", opacity:'100%'}}
        >
          <MenuItem value={" "}>Blanco</MenuItem>
          <MenuItem value={"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"}>OpenStreetMap</MenuItem>
          <MenuItem value={"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"}>Satélite</MenuItem>
          <MenuItem value={"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"}>Topográfico</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}



    
    
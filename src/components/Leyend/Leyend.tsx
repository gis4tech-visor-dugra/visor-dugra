import React, { useRef, useState, useEffect } from "react";
import { Box, Button,Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Import Redux
import { useSelector, useDispatch} from "react-redux";
import { getLayerData } from "../../store/slices/data";
import {getLayerStyle} from "../../store/slices/style";


const Root = styled(Box)({
  position: "absolute",
  left: "0%",
  bottom: "60px",
  margin: "auto",
  display: "flex",
  width: "100%",
  justifyContent: "center",
});

const Item = styled(Box)({
  borderBottom: "4px solid",
  float: "left",
  padding: "3px",
  lineHeight: "1",
  paddingTop: "7px",
  color: "rgb(60,60,60)",
  fontSize: "0.6em",
  fontWeight: "900",
  margin: "1px",
  width: "120px",
  textAlign: "center",
  background: "rgba(255,255,255,0.8)",
});

export default function Leyend() {
  const [data, setData] = useState({}) as any;
  const layer = useSelector((state:any) => state.layer.layer);
  const dispatch = useDispatch();
  let dataStore = useSelector((state:any) => state.data.data);
  let styleStore = useSelector((state:any) => state.style.style);
  let city = useSelector((state:any) => state.city.name);

  const handleChange = async (minValue: any, maxValue: any) => {
    let dataStoreFilter = dataStore.filter((number: any) => number >= `${parseFloat(minValue).toFixed(2)}` && number <= `${parseFloat(maxValue).toFixed(2)}`);
    dispatch(getLayerData(dataStoreFilter));
    let styleStoreFilter = styleStore?.[layer]?.filter((item:any) => `${parseFloat(item.minValue).toFixed(2)}` === `${parseFloat(minValue).toFixed(2)}` && `${parseFloat(item.maxValue).toFixed(2)}` === `${parseFloat(maxValue).toFixed(2)}`);
    dispatch(getLayerStyle({[layer]:styleStoreFilter}));
  };
  
  const reset = async () => {
    try {
      const response = await fetch(`./data/Indicadores_${city}.json`);
      const data = await response.json();
      const newArray = [];
      for (const obj of data) {
        const key = Object.keys(obj).find(key => key === layer);
        if (key) {
          newArray.push(obj[key]);
        }
      }
      dispatch(getLayerData(newArray));

      const responseStyle = await fetch(`./data/indicatorStyles_${city}.json`);
      const dataStyle = await responseStyle.json();
      dispatch(getLayerStyle(dataStyle));
    } catch (error) {
      console.log(error);
    }
  };
   
  return (
    <Root>
      <Box>
      {styleStore?.[layer] && styleStore?.[layer].map((item:any) => (
        <Item 
          key={item.id}
          style={{ borderColor: item.color, borderWidth: item.width, }}
        >
          <Button variant="outlined" size="small" onClick={() => handleChange(item.minValue, item.maxValue)}>
            <Typography variant="caption" display="block" gutterBottom>
              {layer === 'TipoDestin' ? `${item.value.toFixed(2)} / ${item.value.toFixed(2)} ${item.unit}` : 
              `${item.minValue.toFixed(2)} / ${item.maxValue.toFixed(2)} ${item.unit}`}
            </Typography>
          </Button>
        </Item>
      ))}
      </Box>
      <Button onClick={reset} variant="contained" style={{marginTop:'8px'}}>Limpiar</Button>
    </Root>
  );
}
import * as React from 'react';

// Import Redux
import { useSelector } from "react-redux";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Parner() {
  const layer = useSelector((state:any) => state.layer.layer);
  return (
    <Card sx={{ minWidth: 275, boxShadow: "none", backgroundColor: "transparent" }}>
        <Typography variant="h6" color="text.secondary" gutterBottom style={{textAlign:'center'}}>
          UGR.20-13
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom style={{textAlign:'center',maxWidth:'275px'}}>
          ANdando a Destinos Atractivos (ANDA). 
          Factores de ruta y entorno urbano para incentivar caminabilidad 
          en ciudades andaluzas.
        </Typography>
        <CardMedia style={{padding:'20px'}}
          component="img"
          height="190"
          image="/images/junta-andalucia.jpg"
          alt="Junta de Andalucía"
        />
        
    </Card>

  );
}
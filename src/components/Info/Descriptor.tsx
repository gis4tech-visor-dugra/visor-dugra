import * as React from 'react';

// Import Redux
import { useSelector } from "react-redux";

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export default function Descriptor() {
  const title = useSelector((state:any) => state.layer.title);
  const units = useSelector((state:any) => state.layer.units);
  return (
    <Card sx={{ minWidth: 275, boxShadow: "none", backgroundColor: "transparent" }}>
        <Typography variant="h6"  gutterBottom style={{textAlign:'center'}}>
          {title} 
        </Typography>
        <Typography variant="subtitle1"  style={{textAlign:'center'}}>
          ({units})
        </Typography>
    </Card>
  );
}
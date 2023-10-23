import dynamic from 'next/dynamic';
import React , {useState} from 'react';
import { useDispatch} from "react-redux";
import { getCity, getName } from '../store/slices/city';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';

import Sponsor from '../components/Sponsor';
import Developer from '../components/Developer';
import CardInfo from '../components/CardInfo';

// Components
import Select from "../components/Select/Indicadores";
import Drawer from "../components/Drawer";


export default function App() {
  const [value, setValue] = useState('Granada');
  const dispatch = useDispatch();


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Granada" value="Granada" />
            <Tab label="Málaga" value="Malaga" />
          </TabList>
        </Box>
      </TabContext>
      <div style={{ position:'absolute', top:'0px', right:'20px' }} >
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
          <Typography variant="caption" color="text.secondary" align="center">Financiado por </Typography>
          <Sponsor />
        </div>
      </div>
      <div style={{ position:'absolute', top:'0px', left:'20px',margin:'2px' }} >
          <Developer />
      </div>
      <Box sx={{ position:'absolute', bottom:'60px', left:'20px'}}>
        <CardInfo />
        <Select />
      </Box>
    </Box>
  );
}
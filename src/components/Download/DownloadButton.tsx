import React from 'react';
// Import Redux
import { useSelector } from "react-redux";
// Import MUI
import Button from '@mui/material/Button';

function DownloadButton() {
    const city = useSelector((state:any) => state.city.name);

    const handleDownload = () => {
        // URL del archivo CSV
        const csvURL = 'https://gis4tech-anda-ugr.vercel.app/data/INDICADORES_'+ city +'.geojson';
        console.log(csvURL)
        // Crear un enlace temporal para descargar el archivo
        const tempLink = document.createElement('a');
        tempLink.href = csvURL;
        tempLink.setAttribute('download', 'INDICADORES_' + city + '.geojson');
        tempLink.click();
    };

    return (
        <Button variant="contained" color="primary" onClick={handleDownload} style={{marginTop: '10px', width: '100%'}}>
            Descargar Datos
        </Button>
    );
}

export default DownloadButton;
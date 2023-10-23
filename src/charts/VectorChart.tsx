// Importaciones de React
import React, { useRef, useState, useEffect } from "react";

// Importaciones de Redux
import { useSelector, useDispatch } from "react-redux";
import { getLayerStyle,resetLayerStyle } from "../store/slices/style";

// Importaciones de Axios para peticiones HTTP
import axios from 'axios';

// Importaciones de  Tipos y ChartJS
import type { InteractionItem } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Importaciones de React-ChartJS-2 para integración con React
import { Bar, getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from "react-chartjs-2";

// Importaciones de componentes de Material-UI
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// Registro de componentes necesarios para ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function VectorChart() {
  // Estado local y referencias
  const chartRef = useRef() as any;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [sortedDataLayer, setSortedDataLayer] = useState([] as any);
  const [leyend, setLeyend] = useState({}) as any;
  const [binLabels, setBinLabels] = useState([] as any);

  // Estado desde Redux
  const layer = useSelector((state: any) => state.layer.layer);
  const title = useSelector((state: any) => state.layer.title);
  const units = useSelector((state: any) => state.layer.units);
  const dataLayer = useSelector((state: any) => state.data.data);
  const styleStore = useSelector((state: any) => state.style.style);
  const city = useSelector((state: any) => state.city.name);

  // Manejador de evento para extraer estilos de capa del elemento clickeado
  const printElementAtEvent = (element: InteractionItem[]) => {
    if (!element.length) return;
    const { index } = element[0];
    let styleStoreFilter = styleStore?.[layer];
    if (!styleStoreFilter) return;

    let closestItem: any;

    // Aquí usamos los valores originales en lugar de los redondeados.
    if (styleStoreFilter[index]) {
        closestItem = styleStoreFilter[index];
    }

    if (closestItem) {
        dispatch(resetLayerStyle());  // Restablece el estilo/filtrado existente
        dispatch(getLayerStyle({[layer]: [closestItem]})); // Establece el nuevo estilo/filtrado
    }
};

  // Manejador para el evento click en el gráfico
  const onClick = (event: any) => {
    const { current: chart } = chartRef;
    if (!chart) return;
    printElementAtEvent(getElementAtEvent(chart, event));
  }

  const createBinsFromJSON = (data: any, layerStyle: any) => {
    // Inicializa un arreglo para los bins con 0s
    const bins = new Array(layerStyle.length).fill(0);

    // Llena los bins según el rango de cada objeto en layerStyle
    data.forEach((value: any) => {
      for (let i = 0; i < layerStyle.length; i++) {
        if (value >= layerStyle[i].minValue && value <= layerStyle[i].maxValue) {
          bins[i]++;
          break;
        }
      }
    });

    // Extrae los limites de bins para las etiquetas
    const binUnits = layerStyle.map((style: any) => style.unit);
    const binLimits = layerStyle.map((style: any) => `${parseFloat(style.minValue).toFixed(2)} - ${parseFloat(style.maxValue).toFixed(2)} ${style.unit}`);

    return {
      bins,
      binLimits,
      binUnits
    };
  };

  // Efecto para ordenar datos y obtener la leyenda si es necesario
  useEffect(() => {
    if (dataLayer && dataLayer.length > 0 && leyend[layer]) {
        const { bins, binLimits } = createBinsFromJSON(dataLayer, leyend[layer]);
        setSortedDataLayer(bins);
        setBinLabels(binLimits);
    }
    
    if (!Object.keys(leyend).length) {
        axios.get(`/data/indicatorStyles_${city}.json`).then(res => {
            setLeyend(res.data);
        });
    }
  }, [dataLayer, layer, leyend, city]);

  // Configuración del gráfico
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title
      }
    }
  };

  // Datos para el gráfico
  const data = {
    labels: binLabels, 
    datasets: [
        {
            fill: true,
            label: title,
            data: sortedDataLayer,
            borderColor: leyend && leyend[layer] && leyend[layer].map((item: any) => item.color) || [],
            backgroundColor: leyend && leyend[layer] && leyend[layer].map((item: any) => item.color) || [],
        },
    ],
  };

  // Manejadores para abrir/cerrar el diálogo
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-10px",
          color: "#808080",
          borderColor: "#808080",
        }}
      >
        <FullscreenRoundedIcon fontSize="small" />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="lg"
      >
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            <CloseRoundedIcon />
          </Button>
        </DialogActions>
        <DialogContent>
          <Bar ref={chartRef} data={data} options={options} onClick={onClick} height={600}/>
        </DialogContent>
      </Dialog>
      <Bar ref={chartRef} data={data} options={options} onClick={onClick} height={259}/>
    </div>
  );
}

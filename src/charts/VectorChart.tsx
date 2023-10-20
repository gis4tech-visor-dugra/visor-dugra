import React, { useRef, useState, useEffect } from "react";
// Import Redux
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { getLayerData } from "../store/slices/data";
import {getLayerStyle} from "../store/slices/style";

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
import { Bar, getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from "react-chartjs-2";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function VectorChart() {
  const chartRef = useRef() as any;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const layer = useSelector((state:any) => state.layer.layer);
  const dataLayer = useSelector((state:any) => state.data.data);
  const [sortedDataLayer, setSortedDataLayer] = useState([] as any);
  const [leyend, setLeyend] = useState({}) as any;
  let styleStore = useSelector((state:any) => state.style.style);
  let city = useSelector((state:any) => state.city.name);

  const printElementAtEvent = (element: InteractionItem[]) => {
    if (!element.length) return;
    const { index } = element[0];
    let styleStoreFilter = styleStore?.[layer];
    if (!styleStoreFilter) return;

    let closestDifference = Infinity;
    let closestItem: any;

    styleStoreFilter.forEach((item: any) => {
        const minDifference = Math.abs(item.minValue - index);
        const maxDifference = Math.abs(item.maxValue - index);

        if (minDifference < closestDifference || maxDifference < closestDifference) {
            closestDifference = Math.min(minDifference, maxDifference);
            closestItem = item;
        }
    });

    dispatch(getLayerStyle({[layer]: [closestItem]}));
};

  const onClick = (event:any) => {
    const { current: chart } = chartRef;
    if (!chart) {
      return;
    }
    printElementAtEvent(getElementAtEvent(chart, event));
  }

  useEffect(() => {
    setSortedDataLayer([...dataLayer].sort((a, b) => a - b));
    if (!Object.keys(leyend).length) {
      axios.get(`/data/indicatorStyles_${city}.json`)
      .then(res => {
        setLeyend(res.data);
      })
    }
  }, [dataLayer, layer, leyend, city]);
  
  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };
  const labels = sortedDataLayer;

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: layer,
        data: sortedDataLayer,
        borderColor: leyend && leyend[layer] && leyend[layer].map((item: any) => item.color) || [],
        backgroundColor: leyend && leyend[layer] && leyend[layer].map((item: any) => item.color) || [],
      },
    ],
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
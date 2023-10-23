import * as React from "react";

// Importar Redux
import { useSelector } from "react-redux";

// Importar componentes de Material-UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Componente principal
export default function BasicCard() {
  // Obtener el título de la capa desde el estado de Redux
  const layer = useSelector((state: any) => state.layer.title);

  return (
    // Tarjeta principal con estilos específicos
    <Card
      sx={{
        boxShadow: "none",
        backgroundColor: "#328944",
        opacity: "100%",
        zIndex: "99",
        marginBottom: "10px",
        maxHeight: "80px",
        minWidth: "300px",
        maxWidth: "300px",
      }}
    >
      <CardContent>
        {/* Mostrar el título de la capa */}
        <Typography
          variant="subtitle1"
          color="White"
          gutterBottom
          sx={{ 
            margin: "auto",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          <b>{layer}</b>
        </Typography>
        {/* Sección de información adicional */}
        <Typography
          variant="body1"
          gutterBottom
          color="White"
          sx={{ margin: "auto" }}
        >
          Valor:{" "}
          <b>
            <span id="info">&nbsp;</span>
          </b>
          {" "}
        </Typography>
      </CardContent>
    </Card>
  );
}

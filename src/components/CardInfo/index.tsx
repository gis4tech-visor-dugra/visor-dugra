import * as React from "react";

// Import Redux
import { useSelector } from "react-redux";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
  const layer = useSelector((state: any) => state.layer.layer);
  return (
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
        <Typography
          variant="subtitle1"
          color="White"
          gutterBottom
          sx={{ margin: "auto" }}
        >
          <b>{layer}</b>
        </Typography>
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
        </Typography>
      </CardContent>
    </Card>
  );
}

import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import LeaderboardTwoToneIcon from "@mui/icons-material/LeaderboardTwoTone";
import { Grid } from "@mui/material";

import VectorChart from "../../charts/VectorChart";
import Leyend from "../Leyend/Leyend";

const drawerBleeding = 0;

interface Props {
  window?: () => Window;
}

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  position: "absolute",
  bottom: 0,
  width: "100%",
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  visibility: "visible",
  border: "none",
  height: 0, 
}));

export default function SwipeableEdgeDrawer(props: Props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root style={{ backgroundColor: "transparent" }}>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Box
        sx={{
          position: "fixed",
          bottom: 10,
          right: 0,
          left: 0,
          zIndex: 99 ,
          textAlign: "center",
          pt: 1,
        }}
      >
        <Button
          variant="contained"
          onClick={toggleDrawer(true)}
          style={{
            boxShadow: "none",
            backgroundColor: "#328944",
            zIndex: 99
          }}
        >
          <LeaderboardTwoToneIcon sx={{ mr: 1 }} /> Gráficas
        </Button>
      </Box>
      <br />
      <Box sx={{ display: "flex", justifyContent: "right" }}>
        <Leyend />
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <Box sx={{ pt: 2 }}>
            <VectorChart />
          </Box>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

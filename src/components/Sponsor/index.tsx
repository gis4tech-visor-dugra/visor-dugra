import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Parner from './Parner';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'right' }}>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 0, ...(open && { display: 'none' }) }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/images/Emblema_de_la_Junta_de_Andalucía_2020.svg"
              sx={{ width: 40, height: 40 }}
            />
      </IconButton>
      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            marginTop: '120px',
            marginRight: '10px',
            paddingLeft: '20px',
            paddingRight: '20px',
            backgroundColor:'#fff',
            height: '400px',
            borderRadius: '5px',
            maxWidth: '60%',
          },
        }}
        anchor="right"
        open={open}
      >
        <DrawerHeader style={{margin: '0px'}}>
        <Stack sx={{ width: '100%',position:'relative', zIndex:'99' }} spacing={2}>
      </Stack>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <CloseIcon /> : <CloseIcon />}
          </IconButton>
        </DrawerHeader>
        <Parner />
      </Drawer>
      
    </Box>
  );
}
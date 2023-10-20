import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={1}>
      <div style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
        <Typography variant="caption" color="text.secondary" align="center">Desarrollado por</Typography>
      </div>
      <Link href="https://www.gis4tech.com/" target="_blank">
        <img src="/images/gis4tech.jpg" alt="gis4tech" width="auto" height="40px" />
      </Link>
      <Link href="https://www.geopois.com/" target="_blank">
        <img src="/images/geopois.png" alt="geopois" width="auto" height="40px" />
      </Link>
    </Stack>
  );
}
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const SecondaryNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1, borderTop: 'solid 1px white' }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          
          <Typography variant="h6" color="inherit" component="div" sx={{marginLeft: '35px'}}>
            About
          </Typography>
          <Typography variant="h6" color="inherit" component="div" sx={{marginLeft: '25px'}}>
            Post Job
          </Typography>
          <Typography variant="h6" color="inherit" component="div" sx={{marginLeft: '25px'}}>
            Find Job
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default SecondaryNavbar;

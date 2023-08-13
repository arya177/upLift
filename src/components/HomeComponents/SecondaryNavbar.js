import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'

const SecondaryNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1, borderTop: 'solid 1px white' }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          
          <Link style={{marginLeft: '35px', textDecoration: 'none', color: 'white'}}>About</Link>
          <Link to='/ClientHomePage' style={{marginLeft: '25px', textDecoration: 'none', color: 'white'}}>Post Job</Link>
          <Link to='/WorkerHomePage' style={{marginLeft: '25px', textDecoration: 'none', color: 'white'}}>Find Job</Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default SecondaryNavbar;

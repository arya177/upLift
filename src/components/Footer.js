import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../images/Logo.png'
import Divider from '@mui/joy/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static" sx={{height: '220px', justifyContent: 'center'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: 'flex'}}>
          <img src={logo} alt="Logo" style={{width:'100px', height: '100px', marginTop:'10px'}}/>
          <div style={{display: 'flex',marginTop: '30px'}}>
          <p>About</p>
          <a href='mailto:aryashahi2002@gmail.com' style={{marginLeft: '20px', marginTop: '17px', color: 'white', textDecoration:' none'}}>Contact Us</a>
          </div>
          </div>
          
            <div style={{display: 'flex'}}>
            
                <div style={{marginRight:'10px', display:'flex'}}><LinkedinIcon style={{fontSize: 30}}/></div>
                <div style={{marginRight:'10px', display:'flex'}}><FacebookIcon style={{fontSize: 30}}/></div>
                <div style={{marginRight:'10px', display:'flex'}}><TwitterIcon style={{fontSize: 30}}/></div>
                <div style={{marginRight:'30px', display:'flex'}}><InstagramIcon style={{fontSize: 30}}/></div>
           
            </div>
          
        </Toolbar>
        <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
        <Divider sx={{ my: 1, backgroundColor:'white', width: '95%', marginTop: '40px' }} />
        </div>
        <div style={{display: 'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div style={{display: 'flex', marginLeft: '30px'}}> 
                <p>Made by:</p>
                <p style={{marginLeft: '10px'}}>Arya Shahi</p>
            </div>
            <div style={{marginRight: '30px'}}>
                <p>Copyright 2023</p>
            </div>
        </div>
      </AppBar>
    </Box>
  );
}
export default Footer;

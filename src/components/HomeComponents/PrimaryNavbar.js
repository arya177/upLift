import  React, {useEffect,useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import logo from '../../images/Logo.png';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { toast } from 'react-toastify';
import { useUserContext } from '../../UserContext';


const PrimaryNavbar = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = useUserContext();

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      toast.success("Logged out successfully")
      // navigate("/")
    }).catch((error) => {
      // An error happened.
      toast.error("Error occured")
    });
    
  }   

  
  useEffect(()=>{console.log(user)},[user])
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static" sx={{height: '110px', justifyContent: 'center'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: 'flex'}}>
            <img src={logo} alt="Logo" style={{width:'100px', height: '100px', marginTop:'25px'}}/>
            <p style={{fontSize: '50px', fontWeight:'500'}}>UpLift</p>
          </div>
          {user!==null ?  (
            <div >
              <IconButton
                edge="end"
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ): 
          (
            <div style={{display: 'flex'}}>
              <div><Link to="/Login" style={{ fontSize:'20px', color:'white', textDecoration: 'none'}}>Login</Link></div>
              <div style={{marginLeft: '10px'}}><Link to="/SignUp/Role" style={{ fontSize:'20px', color:'white', textDecoration: 'none'}}>Sign Up</Link></div>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default PrimaryNavbar;

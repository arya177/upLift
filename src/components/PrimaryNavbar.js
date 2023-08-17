import React,{useState,useEffect} from 'react'
import logo from '../images/Logo.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useUserContext } from '../UserContext';
import { toast } from 'react-toastify';


const PrimaryNavbar = () => {
    
    
    

    //avatar
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //logout
    const navigate = useNavigate();
    const auth = getAuth();
    const user = useUserContext();

    const handleLogout = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        toast.success("Logged out successfully")
        navigate("/")
        }).catch((error) => {
        // An error happened.
        toast.error("Error occured")
        });
        
    }  

    return (
        <>
            <div style={{display: 'flex', width:'100%', justifyContent:'space-between'}}>
                <div style={{display: 'flex'}}>
                    <div style={{display: 'flex'}}>
                        <img src={logo} alt="Logo" style={{width:'70px', height: '70px', marginTop:'15px', marginLeft: '100px'}}/> 
                        <Link to='/' style={{fontSize: '30px', fontWeight:'500', textDecoration: 'none', cursor: 'pointer', color: '#4343a4', marginLeft:'4px', marginTop: '33px'}}>UpLift</Link>
                    </div>
                 


                     

                  
                    
                </div>
                <div style={{display: 'flex'}}>
                    <div>

                    </div>
                    <div style={{marginRight: '100px', marginTop: '28px'}}>
                        <IconButton
                            edge="end"
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle sx={{fontSize:'30px'}}/>
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
                            <MenuItem onClick={() => {navigate('/users')}}>Profile</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div>
                
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid lightgrey'}}></div>
            </div>
           
        </>
    )
}
export default PrimaryNavbar;
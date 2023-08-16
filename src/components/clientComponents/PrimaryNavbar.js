import React,{useState,useEffect} from 'react'
import logo from '../../images/Logo.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useUserContext } from '../../UserContext';
import { toast } from 'react-toastify';
import MessagePage from '../../pages/MessagePage';
import ClientContent from './ClientContent';


const PrimaryNavbar = () => {
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const navigate = useNavigate();
    const handleMouseEnter1 = (e) => {
        setIsDropdownOpen1(true);
    };
    const handleMouseLeave1 = (e) => {
        setIsDropdownOpen1(false);
    };

    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const handleMouseEnter2 = () => {
        setIsDropdownOpen2(true);
    };
    const handleMouseLeave2 = () => {
        setIsDropdownOpen2(false);
    };
    const contentWrapperStyles = {
        flex: 1,
        overflowY: 'auto', // Enable scrolling for content that exceeds the viewport height
        padding: '20px', // Adjust padding as needed
    };

    const [options, setOptions] = useState({ 
        findWork: true,
        savedJobs: false,
        proposals: false,
        myJobs: false,
        allContracts: false,
        workDiary: false,
        messages: false
    })
    const handlePostJob = () => {
        setOptions({
            findWork: false,
            savedJobs: false,
            proposals: false,
            myJobs: false,
            allContracts: false,
            workDiary: false,
            messages: false
        })
        navigate('/ClientHomePage/GettingStarted')
    }
    const hamdleMessages = () => {
        setOptions({
            findWork: false,
            savedJobs: false,
            proposals: false,
            myJobs: false,
            allContracts: false,
            workDiary: false,
            messages: true
        })
        navigate('/ClientHomePage/messages')
    }
    const handleWorkDiary = () => {
        setOptions({
            findWork: false,
            savedJobs: false,
            proposals: false,
            myJobs: false,
            allContracts: false,
            workDiary: true,
            messages: false
        })
    }
    const handleAllContracts = () => {
        setOptions({
            findWork: false,
            savedJobs: false,
            proposals: false,
            myJobs: false,
            allContracts: true,
            workDiary: false,
            messages: false
        })
    }
    const handleMyJobs = () => {
        setOptions({
            findWork: false,
            savedJobs: false,
            proposals: false,
            myJobs: true,
            allContracts: false,
            workDiary: false,
            messages: false
        })
        navigate('/ClientHomePage/my-jobs')
    }
    const handleAllJobs = () => {
        setOptions({
            findWork: false,
            savedJobs: false,
            proposals: true,
            myJobs: false,
            allContracts: false,
            workDiary: false,
            messages: false
        })
        navigate('/ClientHomePage/all-jobs')
    }
 

    //avatar
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //logout
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
                    <div style={{display: 'flex'}}>
                        <div
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                            style={{
                                marginLeft: '40px', 
                                marginTop: '21px',
                            }}
                        >
                            <div 
                                style={{display: 'flex'}}
                                onMouseEnter={(e) => {e.target.style.color = 'blue'}}
                                onMouseLeave={(e) => e.target.style.color = 'black'}
                            >
                            <p style={{fontSize: '19px', display: 'flex'}}>
                                Jobs
                                <div><ExpandMoreIcon/></div>
                            </p>
                            </div>
                            {isDropdownOpen1 && (
                                <div>
                                    <ul style={{ listStyle: 'none' }}>
                                        <li 
                                            style={{ padding: '10px'}}
                                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                                            onMouseLeave={(e) => e.target.style.color = 'black'}
                                            onClick = {handlePostJob}
                                        >
                                            <div>Post Job</div>
                                            
                                        </li>
                                        <li 
                                            style={{ padding: '10px'}}
                                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                                            onMouseLeave={(e) => e.target.style.color = 'black'}
                                            onClick = {handleMyJobs}
                                        >
                                            <div>My Jobs</div>
                                        </li>
                                        <li 
                                            style={{ padding: '10px'}}
                                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                                            onMouseLeave={(e) => e.target.style.color = 'black'}
                                            onClick = {handleAllJobs}
                                        >
                                            <div>All Job Posts</div>
                                        </li>
                                        
                                    </ul>
                                </div>

                            )}
                        </div>


                        <div
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                            style={{marginLeft: '23px', marginTop: '21px'}}
                        >

                            <div 
                                style={{display: 'flex'}}
                                onMouseEnter={(e) => e.target.style.color = 'blue'}
                                onMouseLeave={(e) => e.target.style.color = 'black'}
                            >
                            <p style={{fontSize: '19px', display: 'flex'}}>
                                Talent
                                <div><ExpandMoreIcon/></div>
                            </p>
                            </div>
                            {isDropdownOpen2 && (
                                <div>
                                    <ul style={{ listStyle: 'none'}}>
                                        <li
                                            style={{ padding: '10px'}}
                                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                                            onMouseLeave={(e) => e.target.style.color = 'black'}
                                            onClick = {handleMyJobs}
                                        >
                                            Discover
                                        </li>
                                        <li
                                            style={{ padding: '10px'}}
                                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                                            onMouseLeave={(e) => e.target.style.color = 'black'}
                                            onClick = {handleAllContracts}
                                        >
                                            Your Hires
                                        </li>
                                        <li
                                            style={{ padding: '10px'}}
                                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                                            onMouseLeave={(e) => e.target.style.color = 'black'}
                                            onClick = {handleWorkDiary}
                                        >
                                            Company Hires
                                        </li>
                                    </ul>
                                </div>

                            )}
                        </div>

                        <Link
                            style={{marginTop: '39px', fontSize: '19px', marginLeft: '23px', color: 'black', textDecoration: 'none'}}
                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                            onMouseLeave={(e) => e.target.style.color = 'black'}
                            onClick={hamdleMessages}
                        >
                            Messages
                        </Link>
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
                            <MenuItem onClick={()=>{navigate('/users')}}>Profile</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div>
                
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid lightgrey'}}></div>
            </div>
            {options.findWork && <div style={contentWrapperStyles}>
                <ClientContent />
            </div>}
            {options.messages && <MessagePage/>}
        </>
    )
}
export default PrimaryNavbar;
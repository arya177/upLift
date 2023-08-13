import React,{useState} from 'react'
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FlagIcon from '@mui/icons-material/Flag';


const JobDetailsCard = ({open, setOpen}) => {
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = (event) => {
        if (event.target.id === 'backButton') {
            setOpen(false);
        }
    };
    
    
    return(
        <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            </IconButton>
            <Drawer 
                anchor="right" open={open} onClose={handleDrawerClose} PaperProps={{ style: { width: 1000 } }}
            >
                <div
                role="presentation"
                onClick={handleDrawerClose}
                onKeyDown={handleDrawerClose}                
                >
                <div style={{padding: '20px'}}><ArrowBackIosIcon id="backButton" /></div>
                <div style={{display: 'flex', marginTop: '20px'}}>
                    <div style={{width: '55%', marginLeft: '40px'}}>
                        <div style={{width:'100%', border: '1px solid lightgrey', padding: '20px', }}>
                            <p style={{fontSize: '24px', fontWeight: '500'}}>Repairing tubelight</p>
                            <p>Skills:  welding, safety measures,circuits</p>
                            <p>Posted 5 hrs ago</p>
                            <p style={{display: 'flex', alignItems: 'center'}}>Location: <LocationOnIcon/></p>
                        </div>
                        <div style={{width :'100%', padding: '20px', border: '1px solid lightgrey', marginTop: '10px'}}>
                            <p style={{fontSize: '15px', fontWeight: '500'}}>Job Description</p>
                            <p style={{fontSize: '15px'}}>I want to get an electrician to repair 2 tubelights. It would be great if electrician brings tubelight and I'll pay for that too.</p>
                        
                        </div>
                        <div style={{width :'100%', padding: '5px 20px', border: '1px solid lightgrey', marginTop: '10px', display: 'flex'}}>
                            <p style={{fontSize: '15px', fontWeight: '500'}}>Amount</p>
                            <p style={{fontSize: '15px', marginLeft: '10px'}}>Rs 300</p>
                        
                        </div>
                        <div style={{width :'100%', padding: '20px', border: '1px solid lightgrey', marginTop: '10px'}}>
                            <p style={{fontSize: '16px', fontWeight: '500'}}>About the Client</p>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <p style={{fontSize: '15px', fontWeight: '500'}}>Ratings:</p>
                                <Rating name="star-rating" value={4} precision={0.5} max={5} readOnly sx={{marginLeft: '10px'}}/>
                            </div>  
                            <p style={{fontSize: '15px', color: 'grey', marginTop: '-8px', padding: '0'}}>24 reviews</p>             
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <CheckCircleIcon sx={{fontSize: '18px'}}/>
                                <p style={{marginLeft: '5px', fontSize: '15px'}}>Payment method verified</p>
                            </div>  
                            <div style={{alignItems: 'center'}}>
                                
                                <p style={{marginLeft: '5px', fontSize: '15px', lineHeight: '1', margin: '5px', padding: '0'}}>62 jobs posted</p>
                                <p style={{marginLeft: '5px', fontSize: '15px', lineHeight: '1', margin: '5px', padding: '0'}}>40 hires</p>
                                <p style={{marginLeft: '5px', fontSize: '15px', color: 'grey'}}>Member since Apr 10, 2020</p>
                            </div>       
                        </div>
                    </div>
                    <div style={{width: '35%', marginLeft: '60px', marginRight: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid lightgrey'}}>
                        <button style={{width: '80%', marginTop: '50px', padding: '10px', borderRadius: '5px', backgroundColor:'#4343a4', color: 'white', fontSize: '17px'}}>Apply Now</button>
                        <button style={{width: '80%', padding: '10px', borderRadius: '5px', backgroundColor:'transparent', color: 'black', marginTop:'15px', fontSize: '17px'}}>Save Job</button>
                        <div style={{display: 'flex', alignItems: 'center'}}><FlagIcon sx={{color:'#4343a4'}}/> <p style={{marginLeft:'10px'}}>Mark as inappropriate</p></div>
                    </div>

                </div>
                </div>
            </Drawer>
        </>
    )
}
export default JobDetailsCard;
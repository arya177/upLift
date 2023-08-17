import React,{useState} from 'react'
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FlagIcon from '@mui/icons-material/Flag';
import WorkerDetailsCard from './WorkerDetailsCard';


const WorkersListCard = ({open, setOpen, jobInfo}) => {
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
                <div style={{display: 'flex', marginTop: '20px', flexDirection: 'column'}}>
                    <div style={{fontSize: '20px', marginLeft: '30px'}}>Workers willing to take up your work.</div>
                    <div style={{fontSize: '20px', marginLeft: '30px'}}>Accept the request only if you want to get your work done from them.</div>
                    <div style={{width: '100%', height: '0px', border: '1px solid lightgrey', margin: '10px 0px'}}></div>
                    <div style={{display: 'flex', flexDirection: 'column', padding: '20px 50px'}}>
                        <div style={{fontSize: '20px', color: 'grey', marginBottom: '8px'}}>Job Details</div>
                        <div style={{fontSize: '20px'}}>{jobInfo?.title}</div>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: '4px'}}>
                            <div style={{color: 'grey'}}>Posted on: </div>
                            <div>17th Aug, 2023</div>
                        </div>
                    </div>
                    <div>
                        <WorkerDetailsCard/>
                        <WorkerDetailsCard/>
                    </div>
                </div>
                </div>
            </Drawer>
        </>
    )
}
export default WorkersListCard;
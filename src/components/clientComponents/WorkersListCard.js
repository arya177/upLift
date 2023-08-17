import React,{useState, useEffect} from 'react'
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowForwardIos';
import WorkerDetailsCard from './WorkerDetailsCard';
import {getUserInfo} from '../api'
import { useUserContext } from '../UserContext';


const WorkersListCard = ({open, setOpen, jobInfo, requestId}) => {
    const user = useUserContext();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        // Call the getUserInfo function and set the response in state
        console.log(user)
        getUserInfo(user?.email)
        .then((data) => {
            console.log(data)
            setUserInfo(data)
        })
        .catch((error) => {
            console.error('Error getting user info:', error);
        });
    }, []);
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
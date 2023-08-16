import React, {useState, useEffect} from 'react';
import { Paper } from '@mui/material';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { ThumbDown, ThumbDownOutlined } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import JobDetailsCard from './JobDetailsCard';
import WorkersListCard from '../clientComponents/WorkersListCard';
import {getUserInfo} from '../../api'
import { useUserContext } from '../../UserContext';


const JobCard = ({onClick, jobInfo}) => {
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
    //left drawer
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const handleCardClick = () => {
        console.log("hi")
        if(userInfo?.role==="Worker") setOpen2(true)
        else setOpen1(true)
    }

    

    const [liked, setLiked] = useState(false);
    const handleLikeIconClick = () => {
        setLiked(!liked);
    };
    
    const [disliked, setDisliked] = useState(false);
    const handleDislikeIconClick = () => {
        setDisliked(!disliked);
    };

    useEffect(()=>{console.log(userInfo)},[userInfo])
    return (
        <>
            <Paper sx={{ borderTop: 'solid 1px #E0EBEF', marginTop: '10px'}} onClick={onClick}>
                <div style={{paddingBottom: '20px'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <div onClick={handleCardClick} style={{marginLeft: '30px', marginTop: '20px', cursor: 'pointer'}}><p style={{fontSize: '22px', color: '#4343a4', fontWeight: '400'}}>{jobInfo?.title}</p></div>
                        <div style={{marginRight: '30px', marginTop: '20px', display: 'flex'}}>
                            <div onClick={handleDislikeIconClick} style={{ cursor: 'pointer' }}>
                                {disliked ? <ThumbDown style={{color:"#4343a4"}} /> : <ThumbDownOutlined />}
                            </div>
                            <div onClick={handleLikeIconClick} style={{ cursor: 'pointer', marginLeft: '10px' }}>
                                {liked ? <Favorite style={{color:"#4343a4"}} /> : <FavoriteBorder />}
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', marginLeft: '30px'}}>
                        <div style={{fontSize: '15px', color: 'grey', marginLeft: '10px'}}>Budget: Rs {jobInfo?.proposedPayment}</div>
                        <div style={{fontSize: '15px', color: 'grey', marginLeft: '10px'}}>Estimated Time: {jobInfo?.expectedServiceTime}</div>
                        <div style={{fontSize: '15px', color: 'grey', marginLeft: '6px', marginTop: '-5px'}}><LocationOnIcon sx={{fontSize:'20px'}}/></div>
                        <div style={{fontSize: '15px', color: 'grey', marginLeft: '4px'}}>Posted: 50 mins ago </div>
                    </div>
                    <div style={{marginLeft: '40px', fontSize: '18px', fontSize:'15px'}}><p style={{width: '80%'}}>{jobInfo?.serviceDesc}</p></div>
                </div>
            </Paper>
            {userInfo?.role==="Client" && <JobDetailsCard open={open1} setOpen={setOpen1} jobInfo={jobInfo}/>}
            {userInfo?.role==="Worker" && <WorkersListCard open={open2} setOpen={setOpen2} jobInfo={jobInfo}/>}
        </>
    )
}
export default JobCard;
import React, {useState} from 'react';
import { Paper } from '@mui/material';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { ThumbDown, ThumbDownOutlined } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import JobDetailsCard from './JobDetailsCard';


const JobCard = ({onClick}) => {
    //left drawer
    const [open, setOpen] = useState(false)
    const handleCardClick = () => {
        console.log("hi")
        setOpen(true)
    }

    const [liked, setLiked] = useState(false);
    const handleLikeIconClick = () => {
        setLiked(!liked);
    };
    
    const [disliked, setDisliked] = useState(false);
    const handleDislikeIconClick = () => {
        setDisliked(!disliked);
    };
    return (
        <>
            <Paper sx={{ borderTop: 'solid 1px #E0EBEF', marginTop: '10px'}} onClick={onClick}>
                <div style={{paddingBottom: '20px'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <div onClick={handleCardClick} style={{marginLeft: '30px', marginTop: '20px', cursor: 'pointer'}}><p style={{fontSize: '22px', color: '#4343a4', fontWeight: '400'}}>Repairing tubelight</p></div>
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
                        <div style={{fontSize: '15px', color: 'grey', marginLeft: '10px'}}>Hourly: Rs 200</div>
                        <div style={{fontSize: '15px', color: 'grey', marginLeft: '10px'}}>Estimated Time: 2-3 hrs</div>
                        <div style={{fontSize: '15px', color: 'grey', marginLeft: '6px', marginTop: '-5px'}}><LocationOnIcon sx={{fontSize:'20px'}}/></div>
                        <div style={{fontSize: '15px', color: 'grey', marginLeft: '4px'}}>Posted: 50 mins ago </div>
                    </div>
                    <div style={{marginLeft: '40px', fontSize: '18px', fontSize:'15px'}}><p>I want to get an electrician to repair 2 tubelights. It would be great if electrician brings tubelight and I'll pay for that too.</p></div>
                </div>
            </Paper>
            <JobDetailsCard open={open} setOpen={setOpen}/>
        </>
    )
}
export default JobCard;
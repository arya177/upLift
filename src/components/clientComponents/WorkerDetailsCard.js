import React from 'react'
import Avatar from 'react-avatar';
import Rating from '@mui/material/Rating';

const WorkerDetailsCard = () => {
    return (
        <>
            <div style={{display: 'flex', marginLeft: '40px', marginTop: '20px', border: '1px solid lightgrey', marginRight: '40px', padding: '10px 20px', borderRadius: '5px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'left',}}>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <Avatar
                        name="Arya Shahi"
                        size="40"
                        round
                    />
                    <p style={{ fontSize: '18px', marginLeft: '10px' }}>Arya Shahi</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <p style={{lineHeight: '1', margin: '7px'}}>Home Interior Design | Maths Tutor | Cleaning Services </p>
                    <div style={{display: 'flex', alignItems: 'center', marginLeft: '7px'}}>
                        <p style={{fontSize: '15px'}}>Ratings:</p>
                        <Rating name="star-rating" value={4} precision={0.5} max={5} readOnly />
                    </div> 
                    <p style={{fontSize: '15px', color: 'grey', marginTop: '-8px', padding: '0', marginLeft: '7px'}}>24 reviews</p> 
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <button>Accept</button>
                <button>Reject</button>
            </div>
            </div>
        </>
    )
}

export default WorkerDetailsCard;
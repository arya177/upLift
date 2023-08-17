import React, {useState, useEffect} from 'react'
import Avatar from 'react-avatar';
import Rating from '@mui/material/Rating';
import { acceptApplication,rejectApplication } from '../../api';
import { toast } from 'react-toastify';

const WorkerDetailsCard = ({approverId, workerInfo, requestId}) => {
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
    useEffect(()=>{console.log(approverId, workerInfo)}, [])
   
    const handleAccept = async () => {
        try {
            await acceptApplication(requestId, approverId);
            setButtonsDisabled(true);
            toast.success("Application accepted successfully.")
            console.log('Application accepted successfully.');
        } catch (error) {
            console.error('Error accepting application:', error);
        }
    }
    const handleReject = async() => {
        try {
            await rejectApplication(requestId, approverId);
            setButtonsDisabled(true);
            toast.success("Application rejected successfully.")

            console.log('Application rejected successfully.');
            // Perform any other necessary actions after rejection
          } catch (error) {
            console.error('Error rejecting application:', error);
            // Handle error as needed
          }
    }
    return (
        <>
            <div style={{display: 'flex', marginLeft: '40px', marginTop: '20px', border: '1px solid lightgrey', marginRight: '40px', padding: '10px 20px', borderRadius: '5px', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'left',marginLeft: '20px'}}>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <Avatar
                        name={workerInfo?.name}
                        size="40"
                        round
                    />
                    <p style={{ fontSize: '18px', marginLeft: '10px' }}>{workerInfo?.name}</p>
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
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginRight: '20px'}}>
                {!buttonsDisabled && <><button onClick = {handleAccept} style={{padding: '10px 25px', width: '150px',marginTop: '10px', backgroundColor: 'green', color: 'white', fontSize: '17px'}} >Accept</button>
                <button onClick = {handleReject} style={{padding: '10px 25px', width: '150px',marginTop: '10px', backgroundColor: 'red', color: 'white', fontSize: '17px'}} >Reject</button></>}
                {buttonsDisabled && <><button disabled style={{padding: '10px 25px', width: '150px',marginTop: '10px', fontSize: '17px'}} >Accept</button>
                <button disabled style={{padding: '10px 25px', width: '150px',marginTop: '10px', fontSize: '17px'}} >Reject</button></>}
            </div>
            </div>
        </>
    )
}

export default WorkerDetailsCard;
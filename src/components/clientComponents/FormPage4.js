import React from 'react'
import PrimaryNavbar from './PrimaryNavbar';
import { TextField } from '@mui/material';
import DropdownList from './DropDownList';
import { Link,useNavigate } from 'react-router-dom';

const FormPage4 = () => {
    const navigate = useNavigate();
    return (
        <>
            <PrimaryNavbar/>
            <div style={{display: 'flex', marginTop: '80px', alignItems: 'center', justifyContent: 'center', width: '60%', marginLeft: '25%'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'left', width: '40%'}}>
                    <div>4/4 Job post</div>
                    <div style={{marginTop: '30px', fontSize: '40px'}}>Start the conversation.</div>
                    <div style={{marginTop: '20px'}}>
                        Talent are looking for:
                        <ul>
                            <li>Clear expectations about your task or deliverables</li>
                            <li>The skills required for your work</li>
                            <li>Details about how you or your team like to work</li>
                        </ul>
                    </div>
                </div>
                <div style={{width: '45%', marginLeft: '5%', marginTop: '50px'}}>
                    <div  style={{fontSize: '20px'}}>Write a title for your job post</div>
                    <div style={{marginTop:'15px'}}>
                    <TextField
                        label="Enter your description"
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth
                    />
                    </div>
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <div style={{width: '100%', height: '0px', border: '2px solid #4343a4', marginTop: '450px'}}></div>
                {/* <div style={{width: '50%', height: '0px', border: '2px solid lightgrey', marginTop: '400px'}}></div> */}
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                <button onClick={() => {navigate('/ClientHomePage/budget')}}style={{padding: '10px 30px', fontSize: '15px', borderRadius: '5px', backgroundColor:'transparent', color: '#4343a4', marginLeft: '70px', marginTop: '20px'}}>Back</button>
                <button onClick={() => {navigate('/')}}style={{padding: '10px 30px', fontSize: '15px', borderRadius: '5px', backgroundColor:'#4343a4', color:'white', marginRight: '70px', marginTop: '20px'}}>Review Job Post</button>
            </div>
        </>
    )
}
export default FormPage4
import React, {useEffect, useState} from 'react';
import PrimaryNavbar from './PrimaryNavbar';
import { Link,useNavigate, useLocation } from 'react-router-dom';
import Footer from '../Footer'
import { toast } from 'react-toastify';
import { createRequest } from '../../api';

const JobDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState({
        email: "",
        title: "",
        location: "",
        service: "",
        serviceDesc: "",
        mobileNumber: "",
        expectTime: "",
        payment: "",
        isContract: ""
    });

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);

        const formDataParam = {
            email: queryParams.get('email'),
            title: queryParams.get('title'),
            location: queryParams.get('location'),
            service: queryParams.get('service'),
            serviceDesc: queryParams.get('serviceDesc'),
            mobileNumber: queryParams.get('mobileNumber'),
            expectTime: queryParams.get('expectTime'),
            payment: queryParams.get('payment'),
            isContract: queryParams.get('isContract'),
        };

        setFormData(formDataParam);
    }, [location.search]);


    const handlePostSubmit = async() => {
        console.log(formData)
        const result = await createRequest(formData);
        if (result) {
            console.log('Request created successfully');
        } else {
            console.log('Failed to create request');
        }
        navigate('/ClientHomePage/')
        toast.success("Job posted successfully")
    }
    return (
        <>
            <PrimaryNavbar/>
            <div style={{display: 'flex', flexDirection: 'column', width: '65%', marginLeft: '350px', marginTop: '20px', marginBottom: '50px'}}>
                <div style={{fontSize: '30px'}}>Job Details</div>
                <div style={{marginTop: '30px', border: '1px solid lightgrey', borderRadius: '5px', width: '100%'}}>
                    <div style={{padding: ' 15px', borderBottom: '1px solid lightgrey', fontSize:'20px'}}>{formData.title}</div>
                    <div style={{borderBottom: '1px solid lightgrey'}}><div style={{padding: '20px 30px', width: '50%'}}>{formData.serviceDesc}</div></div>
                    <div style={{display: 'flex', padding: '20px 30px', borderBottom: '1px solid lightgrey'}}>
                        <p style={{color: 'grey'}}>Category: </p>
                        <p style={{marginLeft: '5px'}}>{formData.service}</p>
                    </div>
                    <div style={{display: 'flex', padding: '20px 30px', flexDirection: 'column', borderBottom: '1px solid lightgrey'}}>
                        <p style={{color: 'grey'}}>Scope: </p>
                        <div style={{display: 'flex', flexDirection: 'column', lineHeight: '1'}}>
                            <p style={{marginLeft: '5px', margin: '4px', padding: '0px'}}>{formData.expectTime}</p>
                            <p style={{marginLeft: '5px', margin: '4px', padding: '0px'}}>{formData.isContract}</p>
                            <div style={{display: 'flex'}}>
                                <p style={{color: 'grey', marginLeft: '5px', margin: '4px', padding: '0px'}}>Location:</p>
                                <p style={{marginLeft: '5px', margin: '4px', padding: '0px'}}>Dumas Road, Surat, Gujarat</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', borderBottom: '1px solid lightgrey', padding: '20px 30px'}}>
                        <div style={{display: 'flex'}}>
                            <p style={{color: 'grey'}}>Budget</p>
                            <p style={{marginLeft: '5px'}}>{formData.payment}</p>
                        </div>

                        <div style={{display:'flex', marginTop: '20px', justifyContent: 'space-between'}}>
                            <button onClick={() => {navigate('/ClientHomePage/description')}} style={{padding: '10px 30px', fontSize: '15px', borderRadius: '5px', backgroundColor:'transparent', color: '#4343a4', marginLeft: '30px', marginTop: '20px'}}>Back</button>
                            <button onClick={handlePostSubmit} style={{padding: '10px 30px', fontSize: '15px', borderRadius: '5px', backgroundColor:'#4343a4', color:'white', marginRight: '30px', marginTop: '20px'}}>Post Job</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default JobDetails
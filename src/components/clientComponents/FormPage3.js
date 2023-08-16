import React, {useState, useEffect} from 'react'
import PrimaryNavbar from './PrimaryNavbar';
import { TextField } from '@mui/material';
import DropdownList from './DropDownList';
import { Link,useNavigate, useLocation } from 'react-router-dom';

const FormPage3 = () => {
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

    const handlePaymentChange = (event) => {
        setFormData({
            ...formData,
            payment: event.target.value,
        });
    };
    const handleNextClick = () => {
        const queryParams = new URLSearchParams(formData).toString();
        navigate(`/ClientHomePage/description?${queryParams}`);
    };

    const handleBackClick = () => {
        const queryParams = new URLSearchParams(formData).toString();
        navigate(`/ClientHomePage/duration?${queryParams}`);
    };
    return (
        <>
            <PrimaryNavbar/>
            <div style={{display: 'flex', marginTop: '80px', alignItems: 'center', justifyContent: 'center', width: '60%', marginLeft: '25%'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'left', width: '40%'}}>
                    <div>3/4 Job post</div>
                    <div style={{marginTop: '30px', fontSize: '40px'}}>Tell us about your budget</div>
                    <div style={{marginTop: '20px'}}>
                    This will help us match you to talent within your range.
                </div>
                </div>
                <div style={{width: '45%', marginLeft: '5%', marginTop: '50px'}}>
                    <div  style={{fontSize: '24px', marginBottom: '20px'}}>Project budget</div>
                    <div>Maximum project budget (Rs)</div>
                    <div>
                    <TextField
                        size='small'
                        variant="outlined"
                        margin="normal"
                        style={{ width: '400px' }}
                        value={formData.payment}
                        onChange={handlePaymentChange}
                    />
                    </div>
                    
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <div style={{width: '75%', height: '0px', border: '2px solid #4343a4', marginTop: '550px'}}></div>
                <div style={{width: '25%', height: '0px', border: '2px solid lightgrey', marginTop: '550px'}}></div>
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                <button onClick={handleBackClick}style={{padding: '10px 30px', fontSize: '15px', borderRadius: '5px', backgroundColor:'transparent', color: '#4343a4', marginLeft: '70px', marginTop: '20px'}}>Back</button>
                <button onClick={handleNextClick}style={{padding: '10px 30px', fontSize: '15px', borderRadius: '5px', backgroundColor:'#4343a4', color:'white', marginRight: '70px', marginTop: '20px'}}>Next</button>
            </div>
        </>
    )
}
export default FormPage3
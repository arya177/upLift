import React, {useState, useEffect} from 'react'
import SecondaryNavbar from './SecondaryNavbar';
import DropdownList from './DropDownList';
import { Link,useNavigate, useLocation } from 'react-router-dom';
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, TextField } from '@mui/material';
import MapLocationPicker from '../MapLocationPicker';


const FormPage2 = () => {
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
        // Parse query parameters from the URL
        const queryParams = new URLSearchParams(location.search);
    
        
    
        // Retrieve formData from previous page's query parameters
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
    
        // Update the formData state
        setFormData(formDataParam);
    }, [location.search]);


    const handleTimeChange = (event) => {
        setFormData({
          ...formData,
          expectTime: event.target.value,
        });
    };

    const handleIsContractChange = (event) => {
        setFormData({
          ...formData,
          isContract: event.target.value,
        });
    };

    const handleNextClick = () => {
        const queryParams = new URLSearchParams({
          ...formData,
          time: formData.expectTime,
          isContract: formData.isContract,
        }).toString();
        navigate(`/ClientHomePage/budget?${queryParams}`);
    };
    const handleBackClick = () => {
        const queryParams = new URLSearchParams({
          ...formData,
          time: formData.expectTime,
          isContract: formData.isContract,
        }).toString();
        navigate(`/ClientHomePage/title?${queryParams}`);
    };
    return (
        <>
            <SecondaryNavbar/>
            <div style={{display: 'flex', marginTop: '80px', width: '60%', marginLeft: '25%'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'left', width: '40%'}}>
                    <div>2/4 Job post</div>
                    <div style={{marginTop: '30px', fontSize: '40px'}}>Let's estimate the scope of your work</div>
                    <div style={{marginTop: '20px'}}>
                        These answers will help us recommend the right talent for what you need.
                    </div>
                </div>
                <div style={{width: '45%', marginLeft: '5%', marginTop: '50px'}}>
                    <div>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">How much time will it take to complete your work</FormLabel>
                            <RadioGroup
                            aria-label="How much time will it take to complete your work"
                            name="gender"
                            value={formData.expectTime}
                            onChange={handleTimeChange}
                            >
                            <FormControlLabel value="Less than a week" control={<Radio />} label="Less than a week" />
                            <FormControlLabel value="Less than a month" control={<Radio />} label="Less than a month" />
                            <FormControlLabel value="More than a month" control={<Radio />} label="More than a month" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div>
                        <p>Select location</p>
                        <MapLocationPicker/>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Is this job a contract-to-hire opportunity?</FormLabel>
                            <RadioGroup
                            aria-label="isContract"
                            name="isContract"
                            value={formData.isContract}
                            onChange={handleIsContractChange}
                            >
                            <FormControlLabel value="Yes, this could become full time" control={<Radio />} label="Yes, this could become full time" />
                            <FormControlLabel value="No, not at this time" control={<Radio />} label="No, not at this time" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <div style={{width: '50%', height: '0px', border: '2px solid #4343a4', marginTop: '100px'}}></div>
                <div style={{width: '50%', height: '0px', border: '2px solid lightgrey', marginTop: '100px'}}></div>
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems:'center', marginBottom: '30px'}}>
                <button onClick={handleBackClick}style={{padding: '10px 30px', fontSize: '15px', borderRadius: '5px', backgroundColor:'transparent', color: '#4343a4', marginLeft: '70px', marginTop: '20px'}}>Back</button>
                <button onClick={handleNextClick} style={{padding: '10px 30px', fontSize: '15px', borderRadius: '5px', backgroundColor:'#4343a4', color:'white', marginRight: '70px', marginTop: '20px'}}>Next</button>
            </div>
        </>
    )
}
export default FormPage2
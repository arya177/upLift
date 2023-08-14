import React, {useState} from 'react'
import PrimaryNavbar from './PrimaryNavbar';
import DropdownList from './DropDownList';
import { Link,useNavigate } from 'react-router-dom';
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, TextField } from '@mui/material';
import MapLocationPicker from '../MapLocationPicker';


const FormPage2 = () => {
    const navigate = useNavigate();
    const [gender, setGender] = useState('female');
    const [ageGroup, setAgeGroup] = useState('adult');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleAgeGroupChange = (event) => {
        setAgeGroup(event.target.value);
    };
    return (
        <>
            <PrimaryNavbar/>
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
                            value={gender}
                            onChange={handleGenderChange}
                            >
                            <FormControlLabel value="male" control={<Radio />} label="Less than a week" />
                            <FormControlLabel value="female" control={<Radio />} label="Less than a month" />
                            <FormControlLabel value="other" control={<Radio />} label="More than a month" />
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
                            aria-label="age-group"
                            name="age-group"
                            value={ageGroup}
                            onChange={handleAgeGroupChange}
                            >
                            <FormControlLabel value="adult" control={<Radio />} label="Yes, this could become full time" />
                            <FormControlLabel value="child" control={<Radio />} label="No, not at this time" />
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
                <button onClick={() => {navigate('/ClientHomePage/title')}}style={{padding: '10px 30px', fontSize: '15px', borderRadius: '5px', backgroundColor:'transparent', color: '#4343a4', marginLeft: '70px', marginTop: '20px'}}>Back</button>
                <button onClick={() => {navigate('/ClientHomePage/budget')}}style={{padding: '10px 30px', fontSize: '15px', borderRadius: '5px', backgroundColor:'#4343a4', color:'white', marginRight: '70px', marginTop: '20px'}}>Next</button>
            </div>
        </>
    )
}
export default FormPage2
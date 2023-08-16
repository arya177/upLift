import React, {useState} from 'react'
import PrimaryNavbar from './PrimaryNavbar';
import { TextField } from '@mui/material';
import DropdownList from './DropDownList';
import { Link,useNavigate } from 'react-router-dom';
import { skills } from '../../constants';
import { useUserContext } from '../../UserContext';

const FormPage1 = () => {
    const navigate = useNavigate();
    const user = useUserContext();

    const [formData, setFormData] = useState({
        email: user.email,
        title: "",
        location: "",
        service: "",
        serviceDesc: "",
        mobileNumber: "",
        expectTime: "",
        payment: "",
        isContract: ""
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    const handleDropdownChange = (selectedValue) => {
        setFormData({
          ...formData,
          service: selectedValue,
        });
      };
    const handleNextClick = () => {
        const queryParams = new URLSearchParams(formData).toString();
        navigate(`/ClientHomePage/duration?${queryParams}`);
    };

    return (
        <>
            <PrimaryNavbar/>
            <div style={{display: 'flex', marginTop: '80px', alignItems: 'center', justifyContent: 'center', width: '60%', marginLeft: '25%'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'left', width: '40%'}}>
                    <div>1/4 Job post</div>
                    <div style={{marginTop: '30px', fontSize: '40px'}}>Let's start with a strong title</div>
                    <div style={{marginTop: '20px'}}>
                        This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!
                    </div>
                </div>
                <div style={{width: '45%', marginLeft: '5%', marginTop: '50px'}}>
                    <div  style={{fontSize: '20px'}}>Write a title for your job post</div>
                    <div>
                        <TextField
                            size="small"
                            variant="outlined"
                            margin="normal"
                            style={{ width: '400px' }}
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <p style={{fontSize: '20px'}}>Examples</p>
                        <ul>
                            <li>Reapiar tubelight</li>
                            <li>Renovation required</li>
                            <li>Interior designer</li>
                        </ul>
                        <div>
                        <DropdownList options={skills} onSelect={handleDropdownChange} />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <div style={{width: '25%', height: '0px', border: '2px solid #4343a4', marginTop: '400px'}}></div>
                <div style={{width: '75%', height: '0px', border: '2px solid lightgrey', marginTop: '400px'}}></div>
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                <button onClick={() => {navigate('/ClientHomePage/GettingStarted')}}style={{padding: '10px 30px', fontSize: '15px', borderRadius: '5px', backgroundColor:'transparent', color: '#4343a4', marginLeft: '70px', marginTop: '20px'}}>Back</button>
                <button onClick={handleNextClick} style={{padding: '10px 30px', fontSize: '15px', borderRadius: '5px', backgroundColor:'#4343a4', color:'white', marginRight: '70px', marginTop: '20px'}}>Next</button>
            </div>
        </>
    )
}
export default FormPage1;
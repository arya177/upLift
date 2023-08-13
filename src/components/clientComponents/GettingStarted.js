import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Radio,AppBar,Toolbar, FormControlLabel } from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../../images/Logo.png'
import PrimaryNavbar from './PrimaryNavbar';
import Footer from '../Footer';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const GettingStarted = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const navigate = useNavigate();
    const handleOption = () => {

    //   const stateString = JSON.stringify(selectedValue);
    //   const encodedState = encodeURIComponent(stateString);
      navigate('/ClientHomePage/title');
      
    }
    const handleRadioChange = (event) => {
      setSelectedValue(event.target.value);
    };
  return (
    <>
    <PrimaryNavbar/>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
    <Card variant="outlined" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 'fit-content', height: 'fit-content', padding: '100px', paddingTop: '20px'}} >
        <div style={{margin: '25px'}}>
            <p style={{fontSize: '25px'}}>Post your job for a </p>
        </div>
        <div style={{display: 'flex'}}>
            <Card variant="outlined" sx={{ minWidth: 275}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <ScheduleIcon sx={{margin: '20px', fontSize: 30}}/>
                    <FormControlLabel
                        value="option1"
                        control={
                        <Radio
                            checked={selectedValue === 'option1'}
                            onChange={handleRadioChange}
                        />
                        }
                    />
                </div>
                <div style={{margin:'20px'}}>
                    <p style={{fontSize: '20px', padding:'0', margin:'2px', lineHeight: 1}}>short term or, part </p>
                    <p style={{fontSize: '20px', padding:'0', margin:'2px', lineHeight: 1}}>time work</p>
                </div>
                
            </Card>
            <Card variant="outlined" sx={{ minWidth: 275, marginLeft: '50px' }}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <CalendarMonthIcon sx={{margin: '20px', fontSize: 30}}/>
                    <FormControlLabel
                        value="option2"
                        control={
                        <Radio
                            checked={selectedValue === 'option2'}
                            onChange={handleRadioChange}
                        />
                        }
                        
                    />
                </div>
                <div style={{margin:'20px'}}>
                    <p style={{fontSize: '20px', padding:'0', margin:'2px', lineHeight: 1}}>longer term work </p>
                </div>
            </Card>


        </div>
        <div style={{marginTop: '50px', width: '100%', display: 'flex', justifyContent: 'end'}}>
            <Link
                to='/ClientHomePage'
                style={{
                    padding: '10px',
                    fontSize: '18px',
                    borderRadius: '10px',
                    color: '#4343a4',
                    width: 'fit-content',
                    marginTop: '13px',
                    textDecoration: 'none', // Set initial text decoration to none
                    transition: 'text-decoration 0.3s', // Add a smooth transition effect
                }}
                onMouseEnter={(e) => {
                    e.target.style.textDecoration = 'underline'; // Apply underline on hover
                }}
                onMouseLeave={(e) => {
                    e.target.style.textDecoration = 'none'; // Remove underline when not hovering
                }}
                >
                Cancel
            </Link>
            {selectedValue==='' && <button disabled style={{padding: '5px ', fontSize:'18px', borderRadius: '10px', backgroundColor:'lightgrey', color:'grey', width: '120px', marginLeft: '15px'}}>Continue</button>}
            {selectedValue!=='' && <button style={{padding: '5px', fontSize:'18px', borderRadius: '10px', backgroundColor:'#4343a4', color:'white', width: '120px', marginLeft: '15px'}} onClick={handleOption}>Continue</button>}
            
            {/* {selectedValue==="option2" && <button style={{padding: '10px', fontSize:'18px', borderRadius: '10px', backgroundColor:'#1976d2', color:'white', width: '290px'}} onClick={handleRole}>Join as Worker</button>} */}
        </div>
        
    </Card>

    
    </div>
    <div style={{marginTop: '110px'}}><Footer/></div>
    
    </>
  );
}
export default GettingStarted
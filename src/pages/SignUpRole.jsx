import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Radio,AppBar,Toolbar, FormControlLabel } from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../images/Logo.png'


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const SignUpRole = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const navigate = useNavigate();
    const handleRole = () => {

      const stateString = JSON.stringify(selectedValue);
      const encodedState = encodeURIComponent(stateString);
      navigate(`/SignUp?state=${encodedState}`);
      
    }
    const handleRadioChange = (event) => {
      setSelectedValue(event.target.value);
    };
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static" sx={{height: '80px', justifyContent: 'center'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: 'flex'}}>
          <img src={logo} alt="Logo" style={{width:'60px', height: '60px'}}/>
          </div>
          
            <div style={{display: 'flex'}}>
                <Link to="/" style={{color: 'white', textDecoration: 'none'}}>About</Link>
            </div>
          
        </Toolbar>
        
      </AppBar>
    </Box>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
    <Card variant="outlined" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 'fit-content', height: 'fit-content', padding: '100px', paddingTop: '20px'}} >
        <div style={{margin: '25px'}}>
            <p style={{fontSize: '25px'}}>Join as client or worker</p>
        </div>
        <div style={{display: 'flex'}}>
            <Card variant="outlined" sx={{ minWidth: 275}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <PersonSearchIcon sx={{margin: '20px', fontSize: 30}}/>
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
                    <p style={{fontSize: '20px', padding:'0', margin:'2px', lineHeight: 1}}>I am a client, </p>
                    <p style={{fontSize: '20px', padding:'0', margin:'2px', lineHeight: 1}}>looking for worker</p>
                </div>
                
            </Card>
            <Card variant="outlined" sx={{ minWidth: 275, marginLeft: '50px' }}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <ManageAccountsIcon sx={{margin: '20px', fontSize: 30}}/>
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
                    <p style={{fontSize: '20px', padding:'0', margin:'2px', lineHeight: 1}}>I am a worker, </p>
                    <p style={{fontSize: '20px', padding:'0', margin:'2px', lineHeight: 1}}>looking for work</p>
                </div>
            </Card>


        </div>
        <div style={{marginTop: '50px'}}>
            {selectedValue==='' && <button disabled style={{padding: '10px', fontSize:'18px', borderRadius: '10px', backgroundColor:'lightgrey', color:'grey', width: '290px'}}>Create Acoount</button>}
            {selectedValue==="option1" && <button style={{padding: '10px', fontSize:'18px', borderRadius: '10px', backgroundColor:'#1976d2', color:'white', width: '290px'}} onClick={handleRole}>Join as Client</button>}
            {selectedValue==="option2" && <button style={{padding: '10px', fontSize:'18px', borderRadius: '10px', backgroundColor:'#1976d2', color:'white', width: '290px'}} onClick={handleRole}>Join as Worker</button>}
        </div>
        <div style={{display: 'flex', marginTop:'10px'}}>
            <p>Already have an account?</p>
            <Link to="/Login" style={{color: '#1976d2', textDecoration: 'none', marginTop: '16px', marginLeft: '5px'}}>Log In</Link>
        </div>
    </Card>

    
    </div>
    </>
  );
}
export default SignUpRole
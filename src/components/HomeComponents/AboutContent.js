import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import AboutImageList from './AboutImageList';
import AddTaskIcon from '@mui/icons-material/AddTask';
import MapLocationPicker from '../MapLocationPicker';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const AboutContent = () => {
  const [checked, setChecked] = useState(false);
  // useEffect(() => {console.log(user)},[])
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
    <Card sx={{ minWidth: 275, margin: '50px', width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px' }}>
      <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography sx={{ fontSize: 60, margin: '0' }} color="#1976d2" gutterBottom>
          
          Lift your career with UpLift
        </Typography>
        <Typography variant="h5" component="div">
          Get the right. Get the best.
          <br/>
          Forget about the rest.
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/SignUp/Role" size="small" style={{color:'#1976d2', textDecoration: 'none'}}>Get Started</Link>
      </CardActions>
    </Card>
    <AboutImageList/>
    <Card sx={{ minWidth: 275,  marginTop: '10px', marginBottom: '30px', width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px' }}>
      <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography sx={{ fontSize: 60, margin: '0' }} color="#1976d2" gutterBottom>
          How work should work
        </Typography>
        <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', marginBottom: '25px', marginTop: '20px'}}>
          <p style={{margin: '3px', fontSize:'20px', padding: '0', lineHeight: '1'}}>Uplift is a platform which aims to connect users who are looking for help to get fulfill their basic requirements</p>
          <p style={{margin: '3px', fontSize:'20px', padding: '0', lineHeight: '1'}}>be it repairing your tubelight, looking out for plumber, or maids or maid-servants</p>
          <p style={{margin: '3px', fontSize:'20px', padding: '0', lineHeight: '1'}}>with local workers who are expert for such works</p>

        </div>
        <div style={{alignItems: 'left'}}>
          <div style={{display: 'flex'}}>
            <AddTaskIcon sx={{marginTop: '12px', marginRight: '12px'}}/>
            <p>No cost to join</p>
          </div>
          <div style={{display: 'flex'}}>
            <AddTaskIcon sx={{marginTop: '12px', marginRight: '12px'}}/>
            <p>Post your requirement and Get the best talent </p>
          </div>
          <div style={{display: 'flex'}}>
            <AddTaskIcon sx={{marginTop: '12px', marginRight: '12px'}}/>
            <p>Find the most suitable work according to your skills</p>
          </div>
        </div>    
          
        
            
          
      </CardContent>
      
    </Card>
    <div style={{width: '100%'}}>
  
    </div>
    </div>
  );
}
export default AboutContent;

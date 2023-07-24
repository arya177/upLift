import React,{useState} from 'react';
import { Radio,AppBar,Toolbar, FormControlLabel, CardMedia, Card } from '@mui/material';
import Box from '@mui/material/Box';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import logo from '../images/Logo.png'
import GoogleIcon from '@mui/icons-material/Google';
import SignUpEmail from '../components/authComponents/SignUpEmail';
import SignUpPhone from '../components/authComponents/SignUpPhone';


const SignUp = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    const buttonStyles = {
      display: 'flex',
      width: '500px',
      padding: '0',
      backgroundColor: isHovered ? 'blue' : 'lightgrey',
      color: isHovered ? 'white' : 'black',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
    };
  

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const encodedState = searchParams.get('state');
    const decodedState = JSON.parse(decodeURIComponent(encodedState));

    const [selectedValue, setSelectedValue] = useState(decodedState);
    const handleWorkerChange = () => {setSelectedValue("option2")}
    const handleClientChange = () => {setSelectedValue("option1")}

    const [isEmail, setIsEmail] = useState(true);
    const handleEmail = () => {setIsEmail(true)}
    const handlePhone = () => {setIsEmail(false)}

    return(
        <>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{height: '80px', justifyContent: 'center'}}>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex'}}>
                <img src={logo} alt="Logo" style={{width:'60px', height: '60px'}}/>
                </div>
                
                    {selectedValue==="option1" && <div style={{display: 'flex'}}>
                        <p>Looking for work?</p>
                        <Link to="/SignUp" style={{color: 'white', marginTop:'16px', marginLeft: '5px'}} onClick={handleWorkerChange}>Apply as Worker</Link>
                    </div>}
                    {selectedValue==="option2" && <div style={{display: 'flex'}}>
                        <p>Looking for worker?</p>
                        <Link to="/SignUp" style={{color: 'white', marginTop:'16px', marginLeft: '5px'}} onClick={handleClientChange}>Apply as Client</Link>
                    </div>}
                
                </Toolbar>
                
            </AppBar>
            </Box>
            <div style={{display: 'flex', alignItems:'center', flexDirection:'column', justifyContent:'center', marginTop:'50px'}}>
            <Card variant="outlined"sx={{width:'800px', height:'fit-content', display: 'flex', alignItems:'center', flexDirection:'column', padding: '30px', borderRadius:'10px', paddingLeft: '80px', paddingRight: '80px'}}>
                <div>
                    {selectedValue==="option1" && <p style={{fontSize:'45px'}}>Sign up to hire worker</p>}
                    {selectedValue==="option2" && <p style={{fontSize:'45px'}}>Sign up to find work you love</p>}
                </div>
                {/* line  */}
                <div style={{width:'95%',height:'0px', border:'1px solid lightgrey', marginTop:'40px',  marginRight:'15px'}}></div>
                <div style={{display:'flex', justifyContent: 'center', marginBottom:'40px', width:'100%'}}>
                    <div 
                        onClick={handleEmail}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40%',
                            borderBottom: '1px solid lightgrey',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#f0f0f0'; // Change background color on hover
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent'; // Reset background color when not hovering
                          }}
                    >
                        <p style={{fontSize:'20px'}}>Email</p>
                    </div>
                    <div style={{width:'0px', height:'60px', border:'1px solid lightgrey'}}></div>
                    <div 
                        onClick={handlePhone} 
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40%',
                            borderBottom: '1px solid lightgrey',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#f0f0f0'; // Change background color on hover
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent'; // Reset background color when not hovering
                          }}
                    >
                        <p style={{fontSize:'20px'}}>Phone</p>
                    </div>
                </div>
                <div style={{width: '100%'}}>
                    {isEmail && <SignUpEmail role={selectedValue}/>}
                    {!isEmail && <SignUpPhone role={selectedValue}/>}
                </div>
                <div style={{display: 'flex', width:'100%', justifyContent:'center'}}>
                    <div style={{width:'45%',height:'0px', border:'1px solid lightgrey', marginTop:'40px', marginRight:'15px'}}></div><div style={{marginTop: '15px'}}><p>or</p></div><div style={{width:'45%',height:'0px', border:'1px solid lightgrey', marginTop:'40px', marginLeft:'15px'}}></div>
                </div>
                <div>
                    {/* <button style={{display:'flex', width:'500px',padding:'0', }}> */}
                    <button
                        style={buttonStyles}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >

                        <GoogleIcon sx={{marginTop:'10px', marginLeft:'15px'}}/>
                        <p style={{margin:'10px',marginLeft: '24%', fontSize: '18px', padding:'0px'}}>Continue with Google</p>
                    </button>
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
export default SignUp
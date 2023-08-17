import React,{useState} from 'react';
import { Radio,AppBar,Toolbar, FormControlLabel, CardMedia, Card } from '@mui/material';
import Box from '@mui/material/Box';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import logo from '../images/Logo.png'
import GoogleIcon from '@mui/icons-material/Google';
import LoginEmail from '../components/authComponents/LoginEmail'
import LoginPhone from '../components/authComponents/LoginPhone'

const LoginPage = () => {

    // email or phone auth
    const [isEmail, setIsEmail] = useState(true);
    const handleEmail = () => {setIsEmail(true)}
    const handlePhone = () => {setIsEmail(false)}


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
    return(
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{height: '80px', justifyContent: 'center'}}>
                    <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex'}}>
                    <img src={logo} alt="Logo" style={{width:'60px', height: '60px'}}/>
                    </div>                    
                    </Toolbar>
                </AppBar>
            </Box>
            
            
            <div style={{display: 'flex', alignItems:'center', flexDirection:'column', justifyContent:'center', marginTop:'50px'}}>
            <Card variant="outlined"sx={{width:'600px', height:'fit-content', display: 'flex', alignItems:'center', flexDirection:'column', padding: '50px', borderRadius:'10px', paddingLeft: '80px', paddingRight: '80px'}}>
                <div>
                    <p style={{fontSize:'45px'}}>Login to upLift</p>
                    
                </div>

                {/* Line */}
                <div style={{width:'95%',height:'0px', border:'1px solid lightgrey', marginTop:'40px',  marginRight:'15px'}}></div>
                <div style={{display:'flex', justifyContent: 'center', marginBottom:'10px', width:'100%'}}>
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
                    <LoginEmail/>
                    <LoginPhone/>
               
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
                <div style={{display: 'flex', width:'100%', justifyContent:'center', marginTop:'10px'}}>
                    <div style={{width:'20%',height:'0px', border:'1px solid lightgrey', marginTop:'40px', marginRight:'15px'}}></div>
                    <p style={{marginTop:'30px'}}>Don't have an account?</p>
                    <Link to="/SignUp/Role" style={{color: '#1976d2', textDecoration: 'none', marginTop: '31px', marginLeft: '5px'}}>SignUp</Link>
                    <div style={{width:'20%',height:'0px', border:'1px solid lightgrey', marginTop:'40px', marginLeft:'15px'}}></div>

                </div>
            </Card>
            
            </div>
        </>
    );
}
export default LoginPage
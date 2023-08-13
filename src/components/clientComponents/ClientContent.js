import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Link } from 'react-router-dom';
import { Card, CardContent, Container, CssBaseline, Typography } from '@mui/material';


const ClientContent = () => {
 
    const hoverStyle = {
      textDecoration: 'underline', // Add underline on hover
    };
    const contentWrapperStyles = {
      width: '80%', // Set the width to 80% of the parent container
      flex: 1,
      overflowY: 'auto', // Enable scrolling for content that exceeds the viewport height
      padding: '20px', // Adjust padding as needed
      marginLeft: '140px',
      marginTop: '30px'
    };
  const paperStyles = {
    padding: '20px',
    transition: 'box-shadow 0.3s ease', // Add transition effect for the shadow change
    borderRadius: '10px',
  } ;
  const linkStyles = {
    display: 'inline-block',
    padding: '20px 26px',
    backgroundColor: '#4343a4',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'box-shadow 0.3s ease', // Add a transition effect for the shadow change
    marginLeft: '20px',
    marginRight: '40px'
};
const linkHoverStyles = {
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Shadow effect on hover
};
    return (
        <>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <div style={{fontSize: '45px', padding: '100px', paddingBottom: '10px', marginLeft: '140px'}}>Your Workspace</div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop:'40px' }}>
                  <Box
                    sx={{
                      '&:hover': { boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.2)' },
                      width: 300,
                      height: 350,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '10px',
                      transition: 'box-shadow 0.3s ease-in-out',
                    }}
                  >
                    <Paper sx={{ width: '100%', height: '100%', p: 2, boxShadow: 2, backgroundColor: '#4343a4', color: 'white' }}>
                      {/* Content for the first box */}
                      <div style={{fontSize: '20px', marginTop: '5px'}}>Guided Tour</div>
                      <div style={{fontSize: '25px', padding: '20px', paddingLeft: '0px', marginTop:'20px'}}>Use your workspace to manage draft job posts, action items, and completed work.</div>
                    </Paper>
                  </Box>
                  <Box
                    sx={{
                      '&:hover': { boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.2)' },
                      width: 300,
                      height: 350,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '10px',
                      transition: 'box-shadow 0.3s ease-in-out',
                    }}
                  >
                    <Paper sx={{ width: '100%', height: '100%', p: 2, boxShadow: 2 }}>
                      {/* Content for the second box */}
                      <div style={{display:'flex', alignItems: 'center', justifyContent: 'left'}}><TipsAndUpdatesIcon/> <p style={{marginLeft: '5px', fontSize: '20px'}}>Quick Tip</p></div>
                      <div>
                        <p style={{fontSize: '24px', lineHeight: '1', padding: '0', margin: '7px'}}>Pay with confidence</p>
                        <p style={{fontSize: '20px', lineHeight: '1', padding: '0', margin: '7px', marginTop: '21px', paddingRight: '10px', color: 'grey'}}>Workers look for clients with verified billing methods.There's no cost until you hire, you'll only be charged once your work is completed.</p>
                      </div>
                      <div style={{ margin: '7px',marginTop: '60px'}}>
                        <Link 
                          onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                          onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                        >
                          Learn more about payments
                        </Link>
                      </div>
                    </Paper>
                  </Box>
                  <Box
                    sx={{
                      '&:hover': { boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.2)' },
                      width: 300,
                      height: 350,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '10px',
                      transition: 'box-shadow 0.3s ease-in-out',
                    }}
                  >
                    <Paper sx={{ width: '100%', height: '100%', p: 2, boxShadow: 2 }}>
                      {/* Content for the third box */}
                      <div style={{display:'flex', alignItems: 'center', justifyContent: 'left'}}><TipsAndUpdatesIcon/> <p style={{marginLeft: '5px', fontSize: '20px'}}>Quick Tip</p></div>
                      <div>
                        <p style={{fontSize: '24px', lineHeight: '1', padding: '0', margin: '7px'}}>Stay safe on UpLift</p>
                        <p style={{fontSize: '20px', lineHeight: '1', padding: '0', margin: '7px', marginTop: '21px', paddingRight: '10px', color: 'grey'}}>We are doing our best to keep you safe, and it's important you learn how to identify and report suspicious activity.</p>
                      </div>
                      <div style={{ margin: '7px',marginTop: '80px'}}>
                        <Link 
                          onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                          onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                        >
                          Learn more about safety
                        </Link>
                      </div>
                    </Paper>
                  </Box>
                </div>   
                <div style={contentWrapperStyles}>
                  <Paper
                      elevation={3}
                      style={paperStyles}
                      sx={{
                          '&:hover': {
                              boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.3)', // Shadow effect on hover
                          },
                      }}
                  >
                      <div style={{color: 'grey',paddingLeft: '20px', fontSize: '18px'}}>Get Started</div>
                      <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <div style={{fontSize: '30px', fontWeight: '400',padding: '20px', paddingTop: '5px'}}>Get started and get connected with talent to get the work done</div>

                      <div>
                          <Link 
                            style={linkStyles}
                            onMouseOver={(e) => Object.assign(e.target.style, linkHoverStyles)}
                            onMouseOut={(e) => Object.assign(e.target.style, linkStyles)}
                            to='/ClientHomePage/GettingStarted'
                          >
                              Post a Job
                          </Link>
                      </div>
                      </div>
                  </Paper>
                </div>
                <div style={{width: '100%', display: 'flex', marginTop: '40px', alignItems: 'center', justifyContent: 'center'}}>
                  <Box
                    sx={{
                      '&:hover': { boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.2)' },
                      width: 400,
                      height: 150,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '10px',
                      transition: 'box-shadow 0.3s ease-in-out',
                    }}
                  >
                    <Paper sx={{ width: '100%', height: '100%', p: 2, boxShadow: 2 }}>
                      {/* Content for the third box */}
                      <div>
                        <p style={{fontSize: '18px', lineHeight: '1', padding: '0', margin: '7px', color: 'grey'}}>Payments</p>
                        <p style={{fontSize: '20px', lineHeight: '1', padding: '0', margin: '7px', marginTop: '21px', paddingRight: '10px'}}>Everything you need to know about payments.</p>
                      </div>
                      
                    </Paper>
                  </Box>
                  <Box
                    sx={{
                      '&:hover': { boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.2)' },
                      width: 400,
                      height: 150,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '10px',
                      transition: 'box-shadow 0.3s ease-in-out',
                    }}
                  >
                    <Paper sx={{ width: '100%', height: '100%', p: 2, boxShadow: 2 }}>
                      {/* Content for the third box */}
                      <div>
                        <p style={{fontSize: '18px', lineHeight: '1', padding: '0', margin: '7px', color: 'grey'}}>Payments</p>
                        <p style={{fontSize: '20px', lineHeight: '1', padding: '0', margin: '7px', marginTop: '21px', paddingRight: '10px'}}>How to set up your preferred billing method.</p>
                      </div>
                      
                    </Paper>
                  </Box>
                  <Box
                    sx={{
                      '&:hover': { boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.2)' },
                      width: 400,
                      height: 150,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '10px',
                      transition: 'box-shadow 0.3s ease-in-out',
                    }}
                  >
                    <Paper sx={{ width: '100%', height: '100%', p: 2, boxShadow: 2 }}>
                      {/* Content for the third box */}
                      <div>
                        <p style={{fontSize: '18px', lineHeight: '1', padding: '0', margin: '7px', color: 'grey'}}>Trust & Safety</p>
                        <p style={{fontSize: '20px', lineHeight: '1', padding: '0', margin: '7px', marginTop: '21px', paddingRight: '10px'}}>Keep yourself and others safe on Uplift.</p>
                      </div>
                      
                    </Paper>
                  </Box>
                </div>
            </div>
        </>
    )
}
export default ClientContent;
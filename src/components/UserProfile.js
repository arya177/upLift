import React,{useState,useEffect} from 'react';
import Avatar from 'react-avatar';
import Rating from '@mui/material/Rating';
import JobCard from './workerComponents/JobCard';
import Footer from './Footer';
import PrimaryNavbar from './PrimaryNavbar';
import {getUserInfo} from '../api'
import { useUserContext } from '../UserContext';
import EditUserProfile from './EditUserProfile'

const UserProfile = () => {
    const user = useUserContext();
    const profileStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '50%',
        // backgroundColor: '#f0f0f0',
      };
    
      const nameStyle = {
        marginTop: '10px',
        fontSize: '1.5rem',
      };
    
      const bioStyle = {
        marginTop: '5px',
        fontSize: '1rem',
      };
      const [selectedTab, setSelectedTab] = useState('allJobPosts');
      const handleTabClick = (tab) => {
          setSelectedTab(tab);
      };
      const [userInfo, setUserInfo] = useState(null);
    
       
    useEffect(() => {
        // Call the getUserInfo function and set the response in state
        console.log(user)
        getUserInfo(user.email)
        .then((data) => {
            console.log(data)
            setUserInfo(data)
        })
        .catch((error) => {
            console.error('Error getting user info:', error);
        });
    }, []);
      
    return (
        <>
            <PrimaryNavbar/>
            <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'cnenter', border: '1px solid lightgrey', width: '80%', marginTop: '80px', marginBottom: '40px'}}>
                <div style={{width: '25%'}}>
                    <div style={profileStyle}>
                        <Avatar
                            name={userInfo?.name}
                            size="120"
                            round
                        />
                        <h2 style={nameStyle}>{userInfo?.name}</h2>
                        {userInfo?.services !== undefined && <p style={bioStyle}>{userInfo?.services[0]}</p>}
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <Rating name="star-rating" value={4} precision={0.5} max={5} readOnly sx={{marginLeft: '10px'}}/>
                        </div>  
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Align the EditUserProfile component */}
                        {userInfo && <EditUserProfile userData={userInfo} />}
                    </div>
                </div>
                <div style={{width: '80%'}}>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', marginTop: '20px'}}>
            <div style={{width: '75%', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid lightgrey', padding: '40px'}}>
                <div style={{width: '100%', display: 'flex'}}>
                    <div 
                        style={{
                            padding: '10px',
                            borderBottom: selectedTab === 'allJobPosts' ? '2px solid blue' : 'none',
                            color: selectedTab === 'allJobPosts' ? 'blue' : 'black',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleTabClick('allJobPosts')}
                    >
                        My job posts
                    </div>
                    <div 
                        style={{
                            marginLeft: '25px',
                            padding: '10px',
                            display: 'flex',
                            borderBottom: selectedTab === 'allContracts' ? '2px solid blue' : 'none',
                            color: selectedTab === 'allContracts' ? 'blue' : 'black',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleTabClick('allContracts')}
                    >
                        <div>My contracts</div>
                        <div>(2)</div>
                    </div>
                    
                    </div>
                    <div style={{marginTop: '30px'}}>
                    {/* {selectedTab === 'allJobPosts' && 
                        <>  
                            <JobCard/>
                            <JobCard/>
                        </>
                    }
                    </div>
                    <div style={{marginTop: '30px'}}>
                    {selectedTab === 'allContracts' && 
                        <>  
                            <JobCard/>
                            <JobCard/>
                        </>
                    } */}
                    </div>

                </div>
            </div>
                </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default UserProfile
import React, {useState, useEffect} from 'react'
import { useUserContext } from '../UserContext';
import {fetchUserRequests} from '../api'
import JobCard from './workerComponents/JobCard';

const WorkerProfile = () => {
    const user = useUserContext();

    const [userRequests, setUserRequests] = useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            const data = await fetchUserRequests(user?.email);
            console.log(data)
            setUserRequests(data);
          } catch (error) {
            console.error('Error fetching user requests:', error);
          }
        }
    
        fetchData();
      }, [user?.email]);


    const [selectedTab, setSelectedTab] = useState('myJobPosts');
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };
    return (
        <>
            <div style={{width: '100%'}}>
            <div style={{width: '100%', display: 'flex'}}>
                    <div 
                        style={{
                            padding: '10px',
                            borderBottom: selectedTab === 'myJobPosts' ? '2px solid blue' : 'none',
                            color: selectedTab === 'myJobPosts' ? 'blue' : 'black',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleTabClick('myJobPosts')}
                    >
                        My job posts
                    </div>
                    <div 
                        style={{
                            marginLeft: '25px',
                            padding: '10px',
                            display: 'flex',
                            borderBottom: selectedTab === 'myContracts' ? '2px solid blue' : 'none',
                            color: selectedTab === 'myContracts' ? 'blue' : 'black',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleTabClick('myContracts')}
                    >
                        <div>My contracts</div>
                        <div>(2)</div>
                    </div>
                    
                </div>
                <div style={{marginTop: '30px'}}>
                    {selectedTab === 'myJobPosts' && 
                        <>  
                            {userRequests && userRequests?.map((userRequest, index) => (
                                <JobCard key={index} jobInfo={userRequest} />
                            ))}
                        </>
                    }
                </div>
                <div style={{marginTop: '30px'}}>
                    {selectedTab === 'myContracts' && 
                        <>  
                            {/* <JobCard/>
                            <JobCard/> */}
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default WorkerProfile
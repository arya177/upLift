import React, {useState} from 'react'
import JobCard from '../workerComponents/JobCard';
import PrimaryNavbar from './PrimaryNavbar';
import Footer from '../Footer';

const MyJobs = () => {
    const [selectedTab, setSelectedTab] = useState('allJobPosts');
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <>
        <PrimaryNavbar/>
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', marginTop: '20px'}}>
            <div style={{width: '80%', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid lightgrey', padding: '40px'}}>
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
                {selectedTab === 'allJobPosts' && 
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
                }
                </div>

            </div>
        </div>
        <Footer/>
        </>
    )
}
export default MyJobs;
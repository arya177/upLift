import React, {useState} from 'react'
import JobCard from './JobCard';

const SavedJobs = () => {
    const [selectedTab, setSelectedTab] = useState('search');
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <>
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', marginTop: '20px'}}>
            <div style={{width: '80%', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid lightgrey', padding: '40px'}}>
                <div style={{width: '100%', display: 'flex'}}>
                    <div 
                        style={{
                            padding: '10px',
                            borderBottom: selectedTab === 'search' ? '2px solid blue' : 'none',
                            color: selectedTab === 'search' ? 'blue' : 'black',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleTabClick('search')}
                    >
                        Search
                    </div>
                    <div 
                        style={{
                            marginLeft: '25px',
                            padding: '10px',
                            display: 'flex',
                            borderBottom: selectedTab === 'savedJobs' ? '2px solid blue' : 'none',
                            color: selectedTab === 'savedJobs' ? 'blue' : 'black',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleTabClick('savedJobs')}
                    >
                        <div>Saved Jobs</div>
                        <div>(2)</div>
                    </div>
                    
                </div>
                <div style={{marginTop: '30px'}}>
                {selectedTab === 'savedJobs' && 
                    <>  
                        <JobCard/>
                        <JobCard/>
                    </>
                }
                </div>

            </div>
        </div>
        </>
    )
}
export default SavedJobs;
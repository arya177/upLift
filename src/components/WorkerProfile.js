import React from 'react'

const WorkerProfile = () => {
    const [selectedTab, setSelectedTab] = useState('allJobPosts');
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
                            <JobCard>
                            <JobCard
                            <JobCard>
                            <JobCard/>
                        </>
                    } */}
                </div>
            </div>
        </>
    )
}

export default WorkerProfile
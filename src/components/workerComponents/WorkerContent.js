import React, {useState,useEffect} from 'react'
import SearchBar from '../SearchBar'
import JobCard from './JobCard';
import {getAvailableRequests} from '../../api'
import { useUserContext } from '../../UserContext';


const WorkerContent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const [availableRequests, setAvailableRequests] = useState(null);
    const user = useUserContext();
    useEffect(() => {
        async function fetchAvailableRequests() {
            const requests = await getAvailableRequests(user.email);
            if (requests) {
                console.log(requests)
                setAvailableRequests(requests);
            }
        }

        fetchAvailableRequests();
    }, []);
    
    return (
        <>
            <div style={{dispaly: 'flex'}}>
                <div style={{width: '60%', marginLeft: '8%'}}>
                    <div style={{width: '100%', marginTop: '100px'}}>
                        <SearchBar/>
                    </div>
                    <div style={{width: '100%', marginTop: '30px', display: 'flex'}}>
                        <div
                            style={{
                                marginLeft: '30px',
                                padding:'10px',
                                color: activeTab === 0 ? '#4343a4' : '#4C4F54', // Change text color when the tab is active
                                backgroundColor: activeTab === 0 ? '#EBEDF1' : 'transparent', // Change background color when the tab is active
                                cursor: 'pointer',
                                borderRadius: '3px'
                            }}
                            onClick={() => handleTabClick(0)}
                        >
                            Best Matches
                        </div>
                        <div
                            style={{
                                marginLeft: '15px',
                                padding:'10px',
                                color: activeTab === 1 ? '#4343a4' : '#4C4F54', // Change text color when the tab is active
                                backgroundColor: activeTab === 1 ? '#EBEDF1' : 'transparent', // Change background color when the tab is active
                                cursor: 'pointer',
                            }}
                            onClick={() => handleTabClick(1)}
                        >
                            Most Recent
                        </div>
                        <div
                            style={{
                                marginLeft: '15px',
                                padding:'10px',
                                color: activeTab === 2 ? '#4343a4' : '#4C4F54', // Change text color when the tab is active
                                backgroundColor: activeTab === 2 ? '#EBEDF1' : 'transparent', // Change background color when the tab is active
                                cursor: 'pointer',
                            }}
                            onClick={() => handleTabClick(2)}
                        >
                            Nearby
                        </div>
                        <div
                            style={{
                                marginLeft: '15px',
                                padding:'10px',
                                color: activeTab === 3 ? '#4343a4' : '#4C4F54', // Change text color when the tab is active
                                backgroundColor: activeTab === 3 ? '#EBEDF1' : 'transparent', // Change background color when the tab is active
                                cursor: 'pointer',
                            }}
                            onClick={() => handleTabClick(3)}
                        >
                            Saved Jobs</div>
                    </div>
                    {/* <div style={{width: '100%', height: '0px', border:'1px solid lightgrey'}}></div> */}
                    <div style={{marginLeft: '30px', marginTop: '30px'}}>
                    {availableRequests &&
                        Object.entries(availableRequests).map(([requestId, request], index) => (
                            <JobCard
                            key={index}
                            requestId={requestId} // Pass the request ID as a prop
                            jobInfo={request} // Pass the request data as a prop
                            />
                        ))
                    }
                    </div>
                </div>
                <div style={{width:'30%'}}></div>
            </div>
        </>
    )
}
export default WorkerContent
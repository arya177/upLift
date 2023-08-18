import React,{useState} from 'react'

const Proposals = () => {
    const [activeTab, setActiveTab] = useState('Active');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'left'}}>
                <div style={{fontSize: '25px', marginBottom: '60px', marginTop: '40px', width:'80%'}}>My Proposals</div>
                <div
        style={{
          display: 'flex',
          width: '80%',
          padding: '10px',
          borderBottom: '1px solid lightgrey', // Light grey border for the entire line
          marginBottom: '40px',
        }}
      >
        <div
          style={{
            marginLeft: '20px',
            padding: '10px',
            cursor: 'pointer',
            position: 'relative',
            zIndex: activeTab === 'Active' ? '2' : '1', // Ensure active tab is on top
          }}
          onClick={() => handleTabClick('Active')}
        >
          Active
          {activeTab === 'Active' && (
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: '-1px', // Position the blue line slightly above the lightgrey line
                height: '2px',
                backgroundColor: 'blue',
              }}
            ></div>
          )}
        </div>
        <div
          style={{
            marginLeft: '20px',
            padding: '10px',
            cursor: 'pointer',
            position: 'relative',
            zIndex: activeTab === 'Past' ? '2' : '1', // Ensure active tab is on top
          }}
          onClick={() => handleTabClick('Past')}
        >
          Past
          {activeTab === 'Past' && (
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: '-1px', // Position the blue line slightly above the lightgrey line
                height: '2px',
                backgroundColor: 'blue',
              }}
            ></div>
          )}
        </div>
      </div>

            </div>
        </>
    )
}
export default Proposals;
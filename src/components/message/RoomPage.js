import React from 'react';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const RoomPage = ({ activeRoom }) => {
    return (
        <>
            {activeRoom !== null ? (
                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', height: '66vh' }}>
                    <div style={{ padding: '10px', borderBottom: '1px solid lightgrey', display: 'flex', alignItems: 'center' }}>
                        <AccountCircleIcon sx={{ marginRight: '10px' }} />
                        <div style={{ fontWeight: 'bold' }}>Arya Shahi</div>
                    </div>
                    <div style={{ flex: 1, height: '65vh', overflowY: 'auto', padding: '10px' }}>
                        {/* Render chat messages here */}
                        {/* Example message */}
                        <div style={{ alignSelf: 'flex-end', background: '#B6C8ED', padding: '8px 12px', borderRadius: '10px', marginBottom: '10px' }}>
                            Hi there!
                        </div>
                        {/* More messages... */}
                    </div>
                    <div style={{ borderTop: '1px solid lightgrey', padding: '10px' }}>
                        {/* Chat input area */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <textarea style={{ flex: 1, padding: '8px', border: '1px solid lightgrey', borderRadius: '5px', resize: 'none' }} placeholder="Type a message..."></textarea>
                            <button style={{ marginLeft: '10px', padding: '8px 15px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div style={{ width: '100%', height: '68vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <ForumIcon style={{ fontSize: '4rem', color: '#4343a4' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}>
                        <div style={{ color: 'grey' }}>Once you connect with a client, you'll be</div>
                        <div style={{ color: 'grey' }}>able to chat and collaborate here.</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RoomPage;

import React, { useState } from 'react';
import RoomCard from '../components/message/RoomCard';
import RoomPage from '../components/message/RoomPage';

const MessagePage = () => {
    const [activeRoom, setActiveRoom] = useState(null); // Store the active room ID or user here

    const handleRoomClick = (roomId) => {
        setActiveRoom(roomId);
    };

    return (
        <>
            <div style={{ display: 'flex', width: '100%', marginTop: '20px' }}>
                <div style={{ width: '25%', borderRight: '1px solid lightgrey', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', borderBottom: '1px solid lightgrey', paddingTop: '20px', paddingBottom: '20px' }}>Chat Rooms</div>
                    <div><RoomCard onClick={() => handleRoomClick(1)} active={activeRoom === 1} /></div>
                    <div><RoomCard onClick={() => handleRoomClick(2)} active={activeRoom === 2} /></div>
                    <div><RoomCard onClick={() => handleRoomClick(3)} active={activeRoom === 3} /></div>
                </div>
                <div style={{ width: '75%' }}>
                    <RoomPage activeRoom={activeRoom} />
                </div>
            </div>
        </>
    );
};

export default MessagePage;

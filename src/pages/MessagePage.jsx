import React, { useState, useEffect } from 'react';
import RoomCard from '../components/message/RoomCard';
import RoomPage from '../components/message/RoomPage';
import { getUserMessages } from '../api';
import { useUserContext } from '../UserContext';
import ForumIcon from '@mui/icons-material/Forum';

const MessagePage = () => {
    const [activeRoom, setActiveRoom] = useState(null);
    const [messangerName, setMessangerName] = useState(null)
    const user = useUserContext();
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        async function fetchMessages() {
          try {
            const data = await getUserMessages(user?.email);
            console.log(data)
            setMessages(data);
          } catch (error) {
            console.error('Error fetching user messages:', error);
          }
        }
    
        fetchMessages();
    }, [user?.email]);

    const handleRoomClick = (roomId, name) => {
        setActiveRoom(roomId);
        setMessangerName(name)
    };

    return (
        <>
            <div style={{ display: 'flex', width: '100%', marginTop: '20px' }}>
                <div style={{ width: '25%', borderRight: '1px solid lightgrey', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', borderBottom: '1px solid lightgrey', paddingTop: '20px', paddingBottom: '20px' }}>Chat Rooms</div>
                    {Object.values(messages).map((message, index) => (
                        <div>
                            <RoomCard
                                key={index}
                                messenger={message?.messengerName}
                                onClick={() => handleRoomClick(message?.messagedbId, message?.messengerName)} active={activeRoom === message?.messagedbId}
                            />
                        </div>
                    ))}
                </div>
                <div style={{ width: '75%' }}>
                    {activeRoom && <RoomPage activeRoom={activeRoom} name={messangerName}/>}
                    {!activeRoom && 
                        <>
                        <div style={{ width: '100%', height: '68vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <ForumIcon style={{ fontSize: '4rem', color: '#4343a4' }} />
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}>
                                <div style={{ color: 'grey' }}>Once you connect with a client, you'll be</div>
                                <div style={{ color: 'grey' }}>able to chat and collaborate here.</div>
                            </div>
                        </div>
                        </>}
                </div>
            </div>
        </>
    );
};

export default MessagePage;

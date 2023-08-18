import React, { useState, useEffect, useRef } from 'react';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getMessage, sendMessage} from '../../api';
import { useUserContext } from '../../UserContext';

const RoomPage = ({ activeRoom, name }) => {
    const user = useUserContext();
    const [email, setEmail] = useState(user?.email)

    
    const [messages, setMessages] = useState([]);
    const messageInputRef = useRef(null);
    async function fetchMessages() {
        try {
            const data = await getMessage(activeRoom);
            const messagesArray = Object.values(data?.message);
            setMessages(messagesArray);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    }
    useEffect(() => {
        
    
        fetchMessages();
    }, [activeRoom]);

    const handleSendMessage = async () => {
        const message = messageInputRef.current.value;
        if (message.trim() !== '') {
            try {
                await sendMessage(activeRoom, email, message);
                messageInputRef.current.value = '';
                fetchMessages();
                // You can also update the messages list here if needed
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', height: '66vh' }}>
            <div style={{ padding: '10px', borderBottom: '1px solid lightgrey', display: 'flex', alignItems: 'center' }}>
                <AccountCircleIcon sx={{ marginRight: '10px' }} />
                <div style={{ fontWeight: 'bold' }}>{name}</div>
            </div>
            <div style={{ flex: 1, height: '65vh', overflowY: 'auto', padding: '10px' }}>
                {messages.map((message, index) => (
                    <div
                        key={index}
                        style={{
                            marginLeft: message.user === name ? '0' : 'auto',
                            background: message.user === name ? '#F5F5F5' : '#B6C8ED',
                            padding: '8px 12px',
                            borderRadius: '10px',
                            marginBottom: '10px',
                            maxWidth: '70%',
                            wordWrap: 'break-word',
                            textAlign: message.user === name ? 'left' : 'right',
                        }}
                    >
                        {message.message}
                        <div style={{ fontSize: '12px', color: '#999' }}>
                            {message.time}
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ borderTop: '1px solid lightgrey', padding: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <textarea
                        ref={messageInputRef}
                        style={{ flex: 1, padding: '8px', border: '1px solid lightgrey', borderRadius: '5px', resize: 'none' }}
                        placeholder="Type a message..."
                    />
                    <button
                        style={{ marginLeft: '10px', padding: '8px 15px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoomPage;

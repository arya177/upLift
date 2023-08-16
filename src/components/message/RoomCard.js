import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const RoomCard = ({ onClick, active }) => {
    return (
        <>
            <div onClick={onClick} style={{ display: 'flex', width: '100%', borderBottom: '1px solid lightgrey', paddingTop: '20px', paddingBottom: '20px', alignItems: 'center', background: active ? 'lightgrey' : 'white', cursor: 'pointer' }}>
                <AccountCircleIcon sx={{ marginLeft: '20px' }} />
                <div style={{ marginLeft: '15px' }}>Arya Shahi</div>
            </div>
        </>
    );
};

export default RoomCard;

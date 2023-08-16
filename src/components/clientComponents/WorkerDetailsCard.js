import React from 'react'
import Avatar from 'react-avatar';

const WorkerDetailsCard = () => {
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'left', marginLeft: '40px', marginTop: '20px', border: '1px solid lightgrey', marginRight: '40px', padding: '20px', borderRadius: '5px'}}>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <Avatar
                        name="Arya Shahi"
                        size="40"
                        round
                    />
                    <p style={{ fontSize: '18px', marginLeft: '10px' }}>Arya Shahi</p>
                </div>
            </div>
        </>
    )
}

export default WorkerDetailsCard;
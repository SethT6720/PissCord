import React, { useEffect } from 'react';
import socket from '../services/socket';

export default function Chat() {
    useEffect(() => {
        console.log('[Chat] mounted');
        return () => console.log('[Chat] unmounted');
    }, []);

    return (
        <div className='flex flex-col gap-2 items-center justify-center h-screen bg-green-500'>
            <h1>Welcome to PissCord!</h1>
            <button className='bg-blue-600 w-48 text-white rounded text-3xl px-4 py-2' onClick={() => {
                socket.emit('leave');
            }}>
                Leave Chat
            </button>
        </div>
    )
}
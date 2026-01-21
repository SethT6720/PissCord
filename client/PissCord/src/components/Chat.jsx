import React, { useEffect } from 'react';
import socket from '../services/socket';
import SendMessage from './SendMessage';

export default function Chat() {
    useEffect(() => {
        console.log('[Chat] mounted');
        return () => console.log('[Chat] unmounted');
    }, []);

    return (
        <div className='flex flex-col gap-2 items-center justify-center h-screen w-screen bg-gray-900'>
            <div>
                <h1 className='text-white text-3xl'>Welcome to PissCord!</h1>
                <div className='bg-gray-800'>

                </div>
                <SendMessage />
            </div>
        </div>
    )
}
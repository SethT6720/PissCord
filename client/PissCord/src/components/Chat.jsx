import React, { useEffect } from 'react';
import socket from '../services/socket';
import SendMessage from './SendMessage';

export default function Chat() {
    useEffect(() => {
        console.log('[Chat] mounted');
        return () => console.log('[Chat] unmounted');
    }, []);

    return (
        <div className='flex gap-2 items-center justify-center h-screen w-screen bg-gray-900'>
            <div className='w-1/4'>Placeholder for sidebar</div>
            
            <div className='flex flex-col items-center justify-center h-screen w-3/4'>
                <h1 className='text-white text-3xl'>Welcome to PissCord!</h1>
                <div className='bg-gray-800 w-96 h-96 mt-4 p-4 overflow-y-auto'>

                </div>
                <SendMessage />
            </div>
        </div>
    )
}
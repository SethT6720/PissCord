import React, { useEffect } from 'react';
import socket from '../services/socket';
import SendMessage from './SendMessage';

export default function Chat() {
    useEffect(() => {
        console.log('[Chat] mounted');
        return () => console.log('[Chat] unmounted');
    }, []);

    return (
        <div className='flex h-screen w-screen bg-gray-900 text-white'>

            {/* Sidebar */}
            <div className='w-64 bg-gray-800 p-4'>Placeholder for sidebar</div>
            
            {/* Main Chat Area */}
            <div className='flex flex-col flex-1 h-full'>
                
                {/* Header */}
                <div className="border-b border-gray-700 px-6 py-4">
                    <h1 className='text-2xl font-semibold'>Welcome to PissCord!</h1>
                </div>

                {/* Messages Area */}
                <div className='flex-1 overflow-y-auto bg-gray-900'>
                    <div className='max-w-4xl mx-auto px-6 py-4'>
                        {/* Messages will be displayed here */}
                    </div>
                </div>


                {/* Message Input */}
                <div className='bg-gray-900 border-t border-gray-700'>
                    <div className='max-w-4xl mx-auto'>
                        <SendMessage />
                    </div>
                </div>
            </div>
        </div>
    )
}
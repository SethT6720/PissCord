import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import socket from '../services/socket';

export default function Landing() {
    const navigate = useNavigate();

    useEffect(() => {
        console.log('[Landing] mounted');
    }, []);

    return (
        <div className='flex flex-col gap-2 items-center justify-center h-screen bg-gray-900'>
            <h1 className='text-white text-3xl'>Welcome to PissCord!</h1>
            <button className='bg-blue-600 hover:bg-blue-700 w-48 text-white rounded text-2xl px-4 py-2' onClick={(e) => {
                socket.emit("flag");
                navigate("/chat");
            }}>
                Enter Chat
            </button>
        </div>
    )
}
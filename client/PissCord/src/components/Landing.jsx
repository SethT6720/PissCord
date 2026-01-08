import React from 'react';
import { useNavigate } from 'react-router';
import socket from '../services/socket';

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-2 items-center justify-center h-screen bg-gray-400'>
            <h1>Hello World!</h1>
            <button className='bg-blue-600 w-48 text-white rounded text-3xl px-4 py-2' onClick={(e) => {
                socket.emit("flag");
                navigate("/landing");
            }}>
                Click Me!
            </button>
        </div>
    )
}
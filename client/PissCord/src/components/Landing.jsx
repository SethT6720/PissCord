import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import socket from '../services/socket';
import { useUser } from '../context/UserContext';

export default function Landing() {
    const navigate = useNavigate();
    const { name, setName } = useUser();

    useEffect(() => {
        
    }, []);

    return (
        <div className='flex flex-col gap-2 items-center justify-center h-screen bg-gray-900'>
            <h1 className='text-white text-3xl'>Welcome to PissCord!</h1>
            <form className='flex flex-col gap-2 items-center justify-center' onSubmit={(e) => {
                e.preventDefault();
                setName(e.target.elements[0].value);
                socket.emit('set-name', e.target.elements[0].value);
                navigate('/chat');
            }}>
                <input className='bg-gray-800 text-white rounded px-4 py-2 w-64 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 
                placeholder-gray-400 transition' placeholder='Enter your name'></input>
                <button type='submit' className='bg-blue-600 hover:bg-blue-700 w-48 text-white rounded text-2xl px-4 py-2'>Enter Chat</button> 
            </form>
            
        </div>
    )
}
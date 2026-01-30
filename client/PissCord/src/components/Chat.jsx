import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import socket from '../services/socket';
import SendMessage from './SendMessage';
import Message from './Message';
import Msg from './msg.js';

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const { name } = useUser();

    useEffect(() => {

        socket.on('message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.off('message');
        };
    }, []);

    return (
        <div className='flex h-screen w-screen bg-gray-900 text-white'>

            {/* Sidebar */}
            <div className="
                w-64 bg-gray-800 border-r border-gray-700 p-4
                overflow-y-auto
                scrollbar-thin
                scrollbar-thumb-gray-700
                scrollbar-track-transparent
            ">
                <h2 className="text-lg font-semibold mb-4">Channels</h2>

                <div className="space-y-2 text-gray-300">
                    <div className="hover:bg-gray-700 px-3 py-2 rounded cursor-pointer">
                        # 
                    </div>
                    <div className="hover:bg-gray-700 px-3 py-2 rounded cursor-pointer">
                        # 
                    </div>
                </div>
            </div>
            
            {/* Main Chat Area */}
            <div className='flex flex-col flex-1 h-full'>
                
                {/* Header */}
                <div className="border-b border-gray-700 px-6 py-4">
                    <h1 className='text-2xl font-semibold'>Welcome to PissCord!</h1>
                </div>

                {/* Messages Area */}
                <div 
                className="
                    flex-1 overflow-y-auto
                    bg-linear-to-b from-gray-900 to-gray-800
                    scrollbar-thin
                    scrollbar-thumb-gray-700
                    scrollbar-thumb-rounded-full
                    scrollbar-track-transparent
                ">
                    <div className='max-w-4xl mx-auto px-6 py-4 space-y-1'>
                        {/* Messages will be displayed here */}
                        {messages.map((msg) => (
                            <Message author={msg.author} text={msg.text} self={msg.self} />
                        ))}
                    </div>
                </div>


                {/* Message Input */}
                <div className='bg-gray-900 border-t border-gray-700'>
                    <div className='max-w-4xl mx-auto'>
                        <SendMessage submit={(e) => {
                            e.preventDefault();
                            const input = e.target.elements[0];
                            const message = input.value;
                            if (message) {
                                const msgObj = new Msg(name, message);
                                socket.emit('message', msgObj);
                                msgObj.self = true;
                                setMessages((prevMessages) => [...prevMessages, msgObj]);
                                input.value = '';
                            }
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
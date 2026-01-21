import React from "react";
import socket from "../services/socket";

export default function SendMessage() {

    return (
        <form className="flex w-screen px-2" onSubmit={(e) => {
            e.preventDefault();
            const input = e.target.elements[0];
            const message = input.value;
            if (message) {
                socket.emit('message', message);
                input.value = '';
            }
        }}>
            <input type="text" placeholder="Type a message..." className="bg-gray-800 text-white rounded px-4 py-2 w-full" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 ml-2">Send</button>
        </form>
    )
}
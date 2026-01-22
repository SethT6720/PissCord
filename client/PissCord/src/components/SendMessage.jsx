import React from "react";
import socket from "../services/socket";

export default function SendMessage() {

    return (
        <form className="flex items-center gap-3 p-4" onSubmit={(e) => {
            e.preventDefault();
            const input = e.target.elements[0];
            const message = input.value;
            if (message) {
                socket.emit('message', message);
                input.value = '';
            }
        }}>
            <input type="text" placeholder="Type a message..." className="flex-1 bg-gray-800 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2">Send</button>
        </form>
    )
}
import { io } from 'socket.io-client';

const socket = io("https://sturdy-space-spork-xg4rjg5vv9jfvwvg-5000.app.github.dev/", {
    autoConnect: true,
    withCredentials: true,
});

export default socket;
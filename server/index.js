import express from 'express';
import http from 'node:http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        // Allow both Vite default port and the next one in case Vite falls back to another port
        origin: ["http://localhost:5173", "http://localhost:5174"],
        methods: ["GET", "POST"],
        credentials: true
    }
});

app.get('/', (req, res) => {
    res.send('Server is up');
});

io.on('connection', (socket) => {
    console.log("a user connected");

    socket.on('set-name', (name) => {
        console.log(`User ${name} connected`);
    });

    socket.on("message", (msg) => {
        socket.broadcast.emit("message", msg);
    });

    socket.on('disconnect', () => {
        console.log('a user disconnected');
    });
});

server.listen(5000, () => {
    console.log('server running on port 5000');
});
import express from 'express';
import http from 'node:http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
    }
});

app.get('/', (req, res) => {
    res.send('Server is up');
});

io.on('connection', (socket) => {
    console.log("a user connected");

    socket.on("flag", () => {
        console.log("Test");
    })

    socket.on('disconnect', () => {
        console.log('a user disconnected');
    });
});

server.listen(5000, () => {
    console.log('server running on port 5000');
});
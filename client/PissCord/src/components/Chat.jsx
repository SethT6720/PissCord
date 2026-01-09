import React from 'react';
import { useUser } from '../context/UserContext';
import socket from '../services/socket';

export default function Chat() {
    const { name, setName } = useUser();
}
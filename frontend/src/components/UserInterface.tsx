import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserInterfaceProps {
    backendName: string; //go
}

const UserInterface: React.FC<UserInterfaceProps> = ({ backendName }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    const [users, setUsers] = useState<User[]>([]);
    const [newUser, setNewUser] = useState({ name: '', email: '' });
    const [updateUser, setUpdateUser] = useState({ id: '', name: '', email: '' });

    // Define styles ased on backend name
    const backgroundColors: {[key: string]: string} = {
        go: 'bg-cyan-700 hover:bg-blue-600',
    }

    const buttonColors: {[key: string]: string} = {
        go: 'bg-cyan-600 hover:bg-blue-600',
    }
}

export default UserInterface;
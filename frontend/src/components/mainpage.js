import React, { useState, useEffect } from 'react'
import SearchBar from './search';
import { Card } from '@mui/material';
import  axios from 'axios';

export default function MainPage(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localost:3001/users')
            .then((res) => setUsers(res.data))
            .catch((error) => console.error(error))
    },[]);

    return(
        <div>
            <SearchBar />
            {users.map((user) =>  (
                <li>{user.name}</li>
            ))}
        </div>
    )
}
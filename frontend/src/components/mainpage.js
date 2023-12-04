import React, { useState, useEffect } from 'react'
import SearchBar from './search';
import { Card } from '@mui/material';
import { Typography, Paper } from '@mui/material';
import { Grid } from '@mui/material';
import axios from 'axios';

export default function MainPage(){

    const[users, setUsers] = useState([]);
    const[selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        axios.get('')
        .then(responce => setUsers(responce.data))
        .catch(error => console.log('Error fetching users', error));
    }, []);

    return(
        <div style={{ padding: '20px' }}>
            <Grid container spacinng={3}>
                <Grid item xs={4}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h4" gutterBottom>
                            Users
                        </Typography>
                        {users.map(user => (
                            <div key={user.id} onClick={() => selectedUser(user)}>
                                {user.username}
                            </div>
                        ))}
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant='h4' gutterBottom>
                        Chat with { selectedUser ? selectedUser.username : 'selected user'}
                        </Typography>
                        {selectedUser && <ChatWindow selectedUser={selectedUser}/>}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
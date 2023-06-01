import React from "react";
import { useState } from "react";

function RegisterForm(){
    
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        const user = { name, email, password };

        try{
            const res = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(user)
            });

            if(res.ok){
                console.log('User created seccessfully');
            } else {
                console.error('Error creating user');
            }

        } catch(error){
            console.error('Error create user', error);
        }
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    label="Name"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <input 
                    label="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div>
                <input 
                    label="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <button type="submit">
                Create User
            </button>
        </form>
    )
}

export default RegisterForm;

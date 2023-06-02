import React, { useState } from 'react';

export default function RegisterForm(){
    const[formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const res = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if(res.ok){
                console.log('User created');
            } else {
                console.log('Failted to create');
            }
        } catch(error){
            console.error('Error', error)
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name: </label>
                <input type='text' id="name" name='name' value={formData.name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='email'>Email: </label>
                <input type='email' id="email" name='email' value={formData.email} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='password'>Password: </label>
                <input type='password' id="password" name='password' value={formData.password} onChange={handleChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

import React, { useState } from 'react';
import "../css/register.css";

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
            <label id='deadnet'> DeadNET </label>
            <div className="form-item">
                <label htmlFor='name'>Name</label>
                <div className='input-wrapper'>
                    <input type='text' id="name" name='name' value={formData.name} onChange={handleChange}/>
                </div>
            </div>
            <div className="form-item">
                <label htmlFor='email'>Email</label>
                <div className='input-wrapper'>
                    <input type='email' id="email" name='email' value={formData.email} onChange={handleChange}/>
                </div>
            </div>
            <div className='input-wrapper'>
                <label htmlFor='password'>Password</label>
                <div className='input-wrapper'>
                    <input type='password' id="password" name='password' value={formData.password} onChange={handleChange}/>
                </div>
            </div>
            <button type="submit" className='glitch-button'>Submit</button>
        </form>
    )
}

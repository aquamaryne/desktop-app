import React, { useState } from 'react';
import "../css/register.css";
import TextSett from './art';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm(){

    const navigate = useNavigate();

    const[formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const validateForn = () => {
        const errors = {};

        if(formData.name.trim() === ''){
            errors.name = 'Name is required';
        }

        if(formData.email.trim() === ''){
            errors.email = 'Email is required';
        }

        if(formData.password.trim() === ''){
            errors.password = 'Password is required';
        }

        return errors;
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();

        const validationErrors = validateForn();
        if(Object.keys(validationErrors).length === 0){
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
                    navigate('/mainpage');
                } else {
                    console.log('Failted to create user');
                }
            } catch(error){
                console.error('Error', error)
            }
        } else {
            setErrors(validationErrors) 
        }
        
    };

    return(
        <form onSubmit={handleSubmit}>
            <label id='deadnet'> 
                <TextSett text={"DeadNET"} font={"Bloody"} /> 
            </label> 
            <div className="form-item">
                <label htmlFor='name'>[Name]</label>
                <div className='input-wrapper'>
                    <input 
                        type='text' 
                        id="name" 
                        name='name' 
                        value={formData.name} 
                        onChange={handleChange}
                    />
                </div>
                {errors.name && <div className='error'>{errors.name}</div>}
            </div>
            <div className="form-item">
                <label htmlFor='email'>[Email]</label>
                <div className='input-wrapper'>
                    <input 
                        type='email' 
                        id="email" 
                        name='email' 
                        value={formData.email} 
                        onChange={handleChange}
                    />
                </div>
                {errors.email && <div className='error'>{errors.email}</div>}
            </div>
            <div className='input-wrapper'>
                <label htmlFor='password'>[Password]</label>
                <div className='input-wrapper'>
                    <input 
                        type='password' 
                        id="password" 
                        name='password' 
                        value={formData.password} 
                        onChange={handleChange}
                    />
                </div>
                {errors.password && <div className='error'>{errors.password}</div>}
            </div>
            <button type="submit" className='glitch-button'>Register</button>
        </form>
    )
}

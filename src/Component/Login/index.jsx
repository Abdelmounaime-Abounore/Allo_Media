import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './index.css'
import { Link } from 'react-router-dom';

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleLoginSubmit = async (e) => {

        try {
            const response = await axios.post('http://localhost:9000/api/auth/login', formData);
      
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
    };

    const schema = yup.object().shape({
        email: yup.string().email().required("*Invalid Email"),
        password: yup.string().required("*Password is required"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })

    return (
        <div>
            <div className='container'>
                <div className='header'>
                    <div>Login</div>
                </div>
                <form onSubmit={handleSubmit(handleLoginSubmit)}>
                    <div className='form'>
                        <div className='inputs'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input type="email" name='email' placeholder='Email .. ' value={formData.email} {...register("email")} onChange={handleInputChange} />
                        </div>
                        <p>{errors.email?.message}</p>
                        <div className='inputs'>
                            <FontAwesomeIcon icon={faLock} />
                            <input type="password" name='password' placeholder='Password .. ' value={formData.password} {...register("password")} onChange={handleInputChange} />
                        </div>
                        <p>{errors.password?.message}</p>
                    </div>
                    <div className='buttons'>
                        <div>
                            <div className="forgot-password">Forgot Password</div>
                        </div>
                        <div className='submits'>
                            <button type='submit' className="submit">Login</button>
                            <Link to="/" className="state">Register</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

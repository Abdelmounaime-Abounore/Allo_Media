import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './index.css'

const Authentification = () => {
    const [action, setAction] = useState("Register")

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
        image: '',
        roleName: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFormSubmit = async (e) => {
        // e.preventDefault();

        try {
            const response = await axios.post('http://localhost:9000/api/auth/register', formData);

            console.log('Response Data:', response.data); 
        } catch (error) {
            console.error('Error:', error); 
        }
    };

    const schema = yup.object().shape({
        name: yup.string().required("*Your name is Required"),
        password: yup.string().min(8).max(20).required(),
        email: yup.string().email().required("*Invalid Email"),
        phoneNumber: yup.string()
        .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, '*Invalid phone number')
        .required(),
        address: yup.string().required("*Your adress is required"),
        roleName: yup.string().required("*Invalid role")
    })
    
    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    })

    return (
        <div className='container'>
            <div className='header'>
                <div>{action}</div>
            </div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className='form'>
                    {action === "Login" ?
                        <>
                            <div className='inputs'>
                                <FontAwesomeIcon icon={faUser} />
                                <input type="text" name='name' placeholder='User Name .. ' />
                            </div>
                            <div className='inputs'>
                                <FontAwesomeIcon icon={faLock} />
                                <input type="password" name='password' placeholder='Password .. ' />
                            </div>
                        </> :
                        <>
                            <div className='inputs'>
                                <FontAwesomeIcon icon={faUser} />
                                <input type="text" name='name' placeholder='User Name .. ' value={formData.name} {...register("name")} onChange={handleInputChange}  />
                            </div>
                            <p>{errors.name?.message}</p>
                            <div className='inputs'>
                                <FontAwesomeIcon icon={faLock} />
                                <input type="password" name='password' placeholder='Password .. ' value={formData.password} {...register("password")} onChange={handleInputChange} />
                            </div>
                            <p>{errors.password?.message}</p>
                            <div className='inputs'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <input type="email" name='email' placeholder='Email .. ' value={formData.email} {...register("email")} onChange={handleInputChange} />
                            </div>
                            <p>{errors.email?.message}</p>
                            <div className='inputs'>
                                <FontAwesomeIcon icon={faPhone} />
                                <input type="text" name='phoneNumber' placeholder='Phone .. ' value={formData.phoneNumber} {...register("phoneNumber")} onChange={handleInputChange} />
                            </div>
                            <p>{errors.phoneNumber?.message}</p>
                            <div className='inputs'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <input type="text" name='address' placeholder='Adress .. ' value={formData.address} {...register("address")} onChange={handleInputChange} />
                            </div>
                            <p>{errors.address?.message}</p>
                            <div className='options'>
                                {/* <FontAwesomeIcon icon={faLocationDot} /> */}
                                {/* <input type="text" name='roleName' placeholder='Role .. ' value={formData.roleName} onChange={handleInputChange} /> */}
                                <select name='roleName' value={formData.roleName} {...register("roleName")} onChange={handleInputChange} >
                                    <option value="">Role .. </option>
                                    <option value="client">Client</option>
                                    <option value="livreur">Livreur</option>
                                </select>
                            </div>
                            <p>{errors.roleName?.message}</p>
                            <div className='input-img'>
                                <FontAwesomeIcon icon={faImage} />
                                <input name='image' type="file" value={formData.image} onChange={handleInputChange} required/>
                            </div>
                        </>
                    }
                </div>
                <div className='buttons'>
                    {action === "Register" ?
                        <></> :
                        <div>
                            <div className="forgot-password">Forgot Password</div>
                            {/* <div className='underline'></div> */}
                        </div>
                    }
                    <div className='submits'>
                        <button type='submit' className={action === "Login" ? "state" : "submit"} onClick={() => { setAction("Register") }}>Register</button>
                        <div className={action === "Register" ? "state" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Authentification;

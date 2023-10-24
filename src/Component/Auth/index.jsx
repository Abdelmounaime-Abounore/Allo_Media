import React, { useState } from 'react'
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
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:9000/api/auth/register', formData);

            console.log('Response Data:', response.data); // Handle successful registration
        } catch (error) {
            console.error('Error:', error); // Handle registration error
        }
    };


    return (
        <div className='container'>
            <div className='header'>
                <div>{action}</div>
            </div>
            <form onSubmit={handleFormSubmit}>
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
                                <input type="text" name='name' placeholder='User Name .. ' value={formData.name} onChange={handleInputChange} />
                            </div>
                            <div className='inputs'>
                                <FontAwesomeIcon icon={faLock} />
                                <input type="password" name='password' placeholder='Password .. ' value={formData.password} onChange={handleInputChange} />
                            </div>
                            <div className='inputs'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <input type="email" name='email' placeholder='Email .. ' value={formData.email} onChange={handleInputChange} />
                            </div>
                            <div className='inputs'>
                                <FontAwesomeIcon icon={faPhone} />
                                <input type="text" name='phoneNumber' placeholder='Phone .. ' value={formData.phoneNumber} onChange={handleInputChange} />
                            </div>
                            <div className='inputs'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <input type="text" name='address' placeholder='Adress .. ' value={formData.address} onChange={handleInputChange} />
                            </div>
                            <div className='inputs'>
                                {/* <FontAwesomeIcon icon={faLocationDot} /> */}
                                {/* <input type="text" name='roleName' placeholder='Role .. ' value={formData.roleName} onChange={handleInputChange} /> */}
                                <select name='roleName' placeholder='Role .. ' value={formData.roleName} onChange={handleInputChange} >
                                    <option value=""></option>
                                    <option value="client">Client</option>
                                    <option value="livreur">Livreur</option>
                                </select>
                            </div>
                            <div className='input-img'>
                                <FontAwesomeIcon icon={faImage} />
                                <input name='image' type="file" value={formData.image} onChange={handleInputChange} />
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

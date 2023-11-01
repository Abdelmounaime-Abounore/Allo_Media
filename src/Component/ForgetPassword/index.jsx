import './index.css'
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function ForgetPassword() {

    const [formData, setData] = useState({
        email: "",
    })

    const handelInputChange = (e) => {
        console.log(e.target.value)
        setData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handelSubmuit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:9000/api/auth/forgot-password", formData);
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="forgetPass">
            <div>
                {/* <form action="" onSubmit={handelSubmuit}>
                    <div className='container'>
                        <div className='resetPass'>
                            <input className='' name="email" type="email" placeholder="Email Address" onChange={handelInputChange} />
                        </div>
                        <div>
                            <button type="submit">submit</button>
                        </div>
                        <div>
                            <Link to="/login">Login</Link>
                        </div>
                        <div>
                            <Link to="/">Register</Link>
                        </div>
                    </div>
                </form> */}
                <div className='container'>
                    <h1>Enter you Email to Reset Password</h1>
                    <form onSubmit={handelSubmuit}>
                        <div className='form'>
                            <div className='inputs email-inp'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <input type="email" name='email' placeholder='Email .. ' value={formData.email} onChange={handelInputChange} />
                            </div>
                        </div>
                        <div className='buttons'>
                            <div className=''>
                                <button type='submit' className="submit submit-email">Submit</button>
                            </div>
                        </div>
                        <div className='buttons'>
                            <div className='forg-pass-btn'>
                                <Link to="/login"  className="forg-pass-login">Login</Link>
                                <Link to="/" className="state">Register</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div className='res-pass-btn'>
                <Link to="/" className="state">Register</Link>
                <Link to="/" className="state">Login</Link>
            </div> */}
        </div>
    );
}

export default ForgetPassword;
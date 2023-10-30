import './index.css'
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                <form action="" onSubmit={handelSubmuit}>
                    <div><label >Email</label></div>
                    <div>
                        <input name="email" type="email" placeholder="Email Address" onChange={handelInputChange} />
                    </div>
                    <div>
                        <button type="submit">submit</button>
                    </div>
                </form>
                <div>
                    <Link to="/login">Login</Link>
                </div>
                <div>
                    <Link to="/">Register</Link>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;
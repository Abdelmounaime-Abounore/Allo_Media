import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import './index.css'

const ResetPassword = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let token = searchParams.get('token');

  const [formData, setFormData] = useState({
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:9000/api/auth/reset-password/${token}`, formData);
    //   const message = response.data.message;
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token) {
      token = token.replace(/-/g, '.');
    }
  }, [token]);

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div><label >Email</label></div>
                <div>
                    <input name="password" type="password" placeholder="Password" onChange={handleInputChange} />
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
    );
};

export default ResetPassword;

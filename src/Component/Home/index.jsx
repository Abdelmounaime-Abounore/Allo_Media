import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './index.css'

function Home() {
  const location = useLocation();
  const locationState = location.state || {};
  const { user: locationUser } = locationState;

  const [verificationMessage, setVerificationMessage] = useState('');
  const [user, setUser] = useState(locationUser);
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:9000/api/auth/logout');
      localStorage.clear(); 
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      navigate("/login")
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }

  useEffect(() => {
    const message = localStorage.getItem('verificationMessage');
    if (message) {
      setVerificationMessage(message);
      localStorage.removeItem('verificationMessage');
    }
  
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    }
  }, []);

  return (
    <div>
      {verificationMessage && (
        <p>{verificationMessage}</p>
      )}

      {user && (
        <div>
          <div>
            <h1>{`Welcome ${user.name}, you are ${user.role}`}</h1>
          </div>
          <div className='logout'>
            <button className='btn' onClick={handleLogout}><Link to="/login" className='link'>Logout</Link></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
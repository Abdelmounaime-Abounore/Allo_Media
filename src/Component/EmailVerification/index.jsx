import React, { useState ,useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import './index.css'

const EmailVerification = () => {
  
  const location = useLocation();
  const [verificationMessage, setVerificationMessage] = useState('');

  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    let token = searchParams.get('token');
    let role = searchParams.get('role');
    
    token = token.replace(/-/g, '.')
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/auth/verify/${role}/${token}`);
        const message = response.data.message;
        setVerificationMessage(message);

        console.log(response.data.message); 
        
      } catch (error) {
        console.error(error);
        setVerificationMessage('Error verifying email.');
      }
    };

      verifyEmail();
  }, [location]);

  return (
    <div>
      <h1>{verificationMessage}</h1>
      <div className='link'>
        <Link to="/home" className="goHome">Go Home</Link>
      </div>
    </div>
  );
};

export default EmailVerification;

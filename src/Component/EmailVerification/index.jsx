import React, { useState ,useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

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
        const response = await axios.get(`http://localhost:9000/api/auth/verify/${role}/${token}`);
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
      <p>{verificationMessage}</p>
      <Link to="/home" className="state">Go Home</Link>
    </div>
  );
};

export default EmailVerification;

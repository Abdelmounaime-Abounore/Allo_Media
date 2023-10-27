import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const EmailVerification = () => {
  
  const location = useLocation();
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
  let token = searchParams.get('token');
  let role = searchParams.get('role');
  
  token = token.replace(/-/g, '.')
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/api/auth/verify/${role}/${token}`);
        console.log(response.data.message); 
      } catch (error) {
        console.error(error);
      }
    };

    verifyEmail();
  }, [location]);

  return (
    <div>
      <p>Verifying email...</p>
    </div>
  );
};

export default EmailVerification;

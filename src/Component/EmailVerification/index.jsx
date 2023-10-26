import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EmailVerification = () => {
  const { token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/api/auth/client/verify/${token}`);
        console.log(response.data.message); // This will be the message from your backend
      } catch (error) {
        console.error(error);
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div>
      <p>Verifying email...</p>
    </div>
  );
};

export default EmailVerification;

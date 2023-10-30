import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const locationState = location.state || {};
  const { user: locationUser } = locationState;

  const [verificationMessage, setVerificationMessage] = useState('');
  const [user, setUser] = useState(locationUser);

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
        <p>{`Welcome ${user.name}, you are ${user.role}`}</p>
      )}
    </div>
  );
}

export default Home;
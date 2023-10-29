import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const { user, message  } = location.state || {};

  return (
    <div>
      {message && (
        <p>{message}</p>
      )}

      {user && (
        <p>{`Welcome ${user.name}, you are ${user.role}`}</p>
      )}
    </div>
  );
}

export default Home;

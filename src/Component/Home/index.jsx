import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div>
      {user && (
        <p>{`Welcome ${user.name}, you are ${user.role}`}</p>
      )}
    </div>
  );
}

export default Home;

import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('isLoggedIn');  // Clear login state
    navigate('/login');  // Redirect to login
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;

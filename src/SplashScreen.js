// SplashScreen.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Show splash screen for 2 seconds and then redirect
    const timer = setTimeout(() => {
      navigate('/login');  // Redirect to login page (change to '/dashboard' if user is already logged in)
    }, 2000); // 2 seconds duration

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <h1>Welcome to the App</h1>
      {/* Add your logo or any other splash content here */}
    </div>
  );
};

export default SplashScreen;

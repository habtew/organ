import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // Redirect to dashboard after login
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className='login'>
      <div className='img-container'>
        <img src='./img/undraw_medicin.png' alt="Login illustration" />
      </div>
      <div className='form-login'>
        <h1>Welcome Back</h1>
        <form onSubmit={handleLogin}>
          <input
            className='same'
            type='text'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className='same'
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type='submit' className='same'>Login</button>
        </form>
      </div>
      <div className='register'>
        <p>Don't have an account? <button className='register-btn' onClick={() => navigate('/signup')}>Register</button></p>
      </div>
    </div>
  );
}

export default Login;

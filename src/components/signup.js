import React, { useState } from 'react';
// import { auth } from '../firebaseConfig';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login'); // Redirect to login after successful signup
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className='signup'>
      <div className='top-sign'>
        <img src='./img/top.png' className='top' alt="top"/>
      </div>
      <div className='signup-login'>
        <div className='info'>
          <h1>Register with us!</h1>
          <p>Your information is safe with us</p>
        </div>
        <form onSubmit={handleSignup}>
          <input
            className='same1'
            type='text'
            placeholder='Enter your name'
            required
          />
          <input
            className='same1'
            type='email'
            placeholder='Confirm your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className='same1'
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className='same1'
            type='password'
            placeholder='Confirm your password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type='submit' className='same1 same1-btn'>Register</button>
        </form>
      </div>
      <div className='signup1'>
        <p>Already have an account? <button className='signup-btn' onClick={() => navigate('/login')}>Login</button></p>
      </div>
    </div>
  );
}

export default Signup;

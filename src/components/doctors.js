import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './doctors.css'
import { useNavigate } from 'react-router-dom';

function Doctors() {
  const navigate = useNavigate()
  const notify = () => toast.warn("coming soon");
  const handleClick = () => {
    navigate('/Dashboard');
  };
  return (
    <div className='doctors'>
      <div className='img-container'>
        <img src="./img/nurse1.png" alt="top doc"/>
      </div>
      <div className='doct-details'>
        <div className='title'>
          <h1>Dr amran Alem</h1>
          <p>sr physiotherapist</p>
        </div>
        <div className='head'>
          <p>patients</p>
          <p>Experience</p>
          <p>Rating</p>
        </div>
        <div className='val'>
          <p>1.4k</p>
          <p>5 yr</p>
          <p>4.0</p>
        </div>
        <div className='about'>
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis purus amet sollicitudin nunc quis.</p>       
        </div>
        <div className='btns'>
          <button className='book' onClick={notify}>Book Appointment</button>
          <button className='book' onClick={handleClick}>Home</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Doctors

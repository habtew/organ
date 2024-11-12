import React from 'react'
import './profilepatient.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profilepatient() {
    const navigate = useNavigate();
    const notify = ()=> toast.warn("comming soon!")

  const handleClick = () => {
    navigate('/Dashboard'); // Navigate to the dashboard when the image is clicked
  };
  return (
    <div className='profilepatient'>
        <div className='patientprofile'>
            <div className='img-cont'>
                <img src='./img/nurse1.png' alt="top love"/>
            </div>
            <div className='profile-info'>
                <h1>Emmanuella</h1>
                <p>organ donor</p>
                <p className='last'>lorem epsum dsoin csdmclsdmcsdl cklsmdcs</p>
            </div>
        </div>
        <div className='hr'></div>
        <div className='patient-info'>
            <div className='p1' onClick={notify}>
                <img src='./img/i.png' alt="top btn one"/>
                <p>Personal Informatin</p>
            </div>
            <div className='p1' onClick={notify}>
                <img src='./img/i.png' alt="top btn"/>
                <p>Medical Information</p>
            </div>
            <div className='p1' onClick={notify}>
                <img src='./img/i.png' alt="topeer space"/>
                <p>Organ transplant history</p>
            </div>
            <div className='p1' onClick={notify}>
                <img src='./img/i.png' alt="toper"/>
                <p>Contact Information</p>
            </div>
        </div>
        <button 
            className='btn--pat'
            onClick={handleClick}
            >Home</button>
        <ToastContainer />
    </div>
  )
}

export default Profilepatient

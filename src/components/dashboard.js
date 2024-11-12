import React from 'react';
import Card from './card';
import data from '../data';
import './dashboard.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
// import Profilepatient from './profilepatient';

function Dashboard() {
  const notify = () => toast.warn("coming soon!");
  
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/Profilepatient');
  };

  const handleClick = () => {
    navigate('/Doctors');
  };
  const cards = data.map(item => {
  
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        name={item.name}
        title={item.title}
        star={item.star}
        starempt={item.starempt}
        arrow={item.arrow}
      />
    );
  });

  return (
    <div className="dashboard">
      <nav className="nav">
        <img src="./img/menu.png" alt="Notifications" onClick={notify}/>
        <div className="nav-txt">
          <p>Hello <span>Emmanuella</span></p>
        </div>
        <div className="navv" onClick={handleClick}>
          <img className="nav-top" src="./img/top.png" alt="Top icon" />
          <div className="nav-prof">
            <img src="./img/nurse1.png" alt="Profile" />
          </div>
        </div>
      </nav>
      <div className="content"> {/* Scrollable content wrapper */}
        <div className="searc">
          <input className="search" type="search" placeholder="Search..." />
        </div>
        <div className="another">
          <h1>Doctors</h1>
          <div>
            <p className="first">Psychology</p>
            <p>Psychology</p>
            <p>Psychology</p>
          </div>
        </div>
        <div className="card">
          <section className="cards-list">
            {cards}
          </section>
        </div>
      </div>
      <footer>
        <img
            src="./img/home.png"
            alt="no Home"
            style={{ cursor: 'pointer' }} // Adds a pointer cursor to indicate clickability
          />
        <img src="./img/search.png" alt="one Home" onClick={notify}/>
        <img src="./img/notify.png" alt="three Home" onClick={notify}/>
        {/* <img src="./img/profile.png" alt="Home" onClick={notify}/> */}
        <div className="home">
          <img
            src="./img/profile.png"
            alt="two Home"
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
          />
      </div>
      </footer>
      <ToastContainer />
    </div>
  );
}

export default Dashboard;

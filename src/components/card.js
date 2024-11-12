import React from "react"
import './card.css'
import { useNavigate } from "react-router-dom"

export default function Card(props) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/Doctors');
      };
    return (
        <div 
            onClick={handleClick}
            className="card" >
            
                <img src={`./img/${props.img}`} className="card--image" alt="top bottom"/>
                <div className="card--stats">
                    <p>{props.name}</p>
                    <p>{props.title}</p>
                    <div className="stars">
                        <img src={`./img/${props.star}`} className="card--star" alt="top love iland"/>
                        <img src={`./img/${props.star}`} className="card--star" alt="top love iland"/>
                        <img src={`./img/${props.star}`} className="card--star" alt="top love iland"/>
                        <img src={`./img/${props.star}`} className="card--star" alt="top love iland"/>
                        <img src={`./img/${props.starempt}`} className="card--star" alt="top love iland"/>
                        <img src={`./img/${props.arrow}`} className="card--star" alt="top love iland"/>
                    </div>
                </div>
        </div>
    )
}
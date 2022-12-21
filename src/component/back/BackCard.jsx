import React from 'react'
import './Backend.css';

export const BackCard = (props) => {
  return (
    <>
        <div className="back-card">
            <div className="back-img">
                <img src={props.img} alt="..." />
            </div>
            <div className="back-overlay">
                <div className="back-card-content">
                    <span>{props.title}</span>
                </div>
                <div className="back-card-text">
                    <p>{props.subtitle}</p>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    </>
  )
}

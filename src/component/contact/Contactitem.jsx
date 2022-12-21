import React from 'react'
import './Contact.css'

export const Contactitem = ({icons , title , sub}) => {
  return (
    <>
    <div className="contact-item pad15">
        <div className="contact-icon">
            {icons}
        </div>
        <h4>{title}</h4>
        <span>{sub}</span>
    </div>
    </>
  )
}

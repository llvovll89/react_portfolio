import React , {useState} from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import './Vanilajs.css';

export const VanilaJs = ({image, alt, category, totallike, title, subtitle, desc, codeLink, gitLink}) => {
  const [vanilaCard, setVinaliCard] = useState(false);

  const toggleModal = () => {
    setVinaliCard(!vanilaCard);
  }; 
   

  return (
    <>
    <div className="vanila-card" data-aos="flip-left" data-aos-duration="1000">
    <div className="vanila-card-img">
      <img src={image} alt={alt} onClick={toggleModal} />
    </div>
    <div className="vanila-card-box" p onClick={toggleModal}>
    <div className="vanila-card-content">
      <span onClick={toggleModal}>{category}</span>
      <label>
        <span>
          <AiOutlineHeart className="icon" />
        </span>
        {totallike}
      </label>
    </div>
    <div className="vanila-card-title">
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
    </div>
  </div>

  {vanilaCard ? (
    <div className="vanila-card-modal" >
      <div className="vanila-card-overlay"></div>
      <div className="modal-content">
        <div className="modal-img left">
          <img src={image} alt={alt} />
        </div>
        <div className="modal-text right">
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="modal-btn">
          <a href={codeLink} className="btn-md" target='_blank'>VIEW</a>
          <a href={gitLink} className="btn-md" target='_blank'>CODE</a>
          </div>
          <button className="close-modal" onClick={toggleModal}>
            ❎
          </button>
        </div>
      </div>
    </div>
  ) : null}
    </>
  )
}

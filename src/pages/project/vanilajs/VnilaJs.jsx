import React , {useState} from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import './Vanilajs.css';

export const VanilaJs = (props) => {
  const [vanilaCard, setVinaliCard] = useState(false);

  const toggleModal = () => {
    setVinaliCard(!vanilaCard);
  };  

  return (
    <>
    <div className="vanila-card" data-aos="flip-left" data-aos-duration="1000">
    <div className="vanila-card-img">
      <img src={props.image} alt={props.alt} onClick={toggleModal} />
    </div>
    <div className="vanila-card-box" p onClick={toggleModal}>
    <div className="vanila-card-content">
      <span onClick={toggleModal}>{props.category}</span>
      <label>
        <span>
          <AiOutlineHeart className="icon" />
        </span>
        {props.totallike}
      </label>
    </div>
    <div className="vanila-card-title">
      <p>{props.title}</p>
      <p>{props.subtitle}</p>
    </div>
    </div>
  </div>

  {vanilaCard && (
    <div className="vanila-card-modal">
      <div className="vanila-card-overlay"></div>
      <div className="modal-content">
        <div className="modal-img left">
          <img src={props.image} alt={props.alt} />
        </div>
        <div className="modal-text right">
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
          <div className="modal-btn">
          <a href="#" className="btn-md" target='_blank'>VIEW</a>
          <a href="#" className="btn-md" target='_blank'>CODE</a>
          </div>
          <button className="close-modal" onClick={toggleModal}>
            ❎
          </button>
        </div>
      </div>
    </div>
  )}
    </>
  )
}

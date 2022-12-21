import React , {useState} from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import './ReactProject.css';

export const ReactCard = (props) => {
  const [reactCard, setReactCard] = useState(false);

  const toggleModal = () => {
    setReactCard(!reactCard);
  };

  return (
    <>
    <div className="react-card" data-aos="flip-left" data-aos-duration="1000">
    <div className="react-card-img">
      <img src={props.image} alt={props.alt} onClick={toggleModal} />
    </div>
    <div className="react-card-box" p onClick={toggleModal}>
    <div className="react-card-content">
      <span onClick={toggleModal}>{props.category}</span>
      <label>
        <span>
          <AiOutlineHeart className="icon" />
        </span>
        {props.totallike}
      </label>
    </div>
    <div className="react-card-title">
      <p>{props.title}</p>
      <p>{props.subtitle}</p>
    </div>
    </div>
  </div>

  {reactCard && (
    <div className="react-card-modal">
      <div className="react-card-overlay"></div>
      <div className="modal-content">
        <div className="modal-img left">
          <img src={props.image} alt={props.alt} />
        </div>
        <div className="modal-text right">
          <span>New Project</span>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
          <div className="modal-btn">
            <a href="#" className="btn-md">CODE</a>
            <a href="#" className="btn-md">DEMO</a>
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

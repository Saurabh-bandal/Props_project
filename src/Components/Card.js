import React from 'react';

const Card = (props) => {
  return (
    <>
   
          <div className="card">
            <div className="card-body">
              <img src={props.image} className='img-fluid'/>
              <h5 className="card-title fw-bold">{props.title}  </h5>
              <p className="card-text">{props.para}</p>
              <a href="#" className="btn fw-bold">{props.btn}</a>
            </div>
          </div>
      
    </>
  );
}

export default Card;

import React from 'react';
import img1 from '../image/back.jpeg'; // Importing the same image for simplicity
import img2 from "../image/burger.jpeg"
import './Hero.css'

const Herosection = (props) => {
  return (
    <section className='herosection my-5'>
      <section className='container-fluid'>
        <section className='row align-items-center'>
          {/* Conditionally render image/text based on section order */}
          {props.reverse ?
           (
            <>
              <div className='col-12 col-xl-6 mt-5'>
                <img src={img2} alt="Description" className='img-fluid saurya'/>
              </div>
              <div className='col-12 col-xl-6 text-center'>
                <h1>{props.title}</h1>
                <h1>{props.title2}</h1>
                <p>{props.para}</p>
                <p>{props.para1}</p>
                <button type="button" className="btn btn-primary">{props.btn}</button>
              </div>
            </>
          )
           :
            (
            <>
              <div className='col-12 col-xl-6 text-center'>
                <h1>{props.title}</h1>
                <h1>{props.title2}</h1>
                <p>{props.para}</p>
                <p>{props.para1}</p>
                <button type="button" className="btn btn-primary">{props.btn}</button>
              </div>
              <div className='col-12 col-xl-6 mt-5'>
                <img src={img1} alt="Description" className='img-fluid saurya' />
              </div>
            </>
          )
          }
        </section>
      </section>
    </section>
  );
};

export default Herosection;

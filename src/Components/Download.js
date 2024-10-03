import React from 'react'
import img1 from "../image/iphone.png"

const Download = () => {
  return (
    <div className='container-fluid my-5 panu2 py-5'>
      <div className='row text-center align-items-center text-light'>
      <div className='col-12 col-xl-8'>
        <h5>Download App</h5>
        <h1>People around you are ordering delicious meals using the Treact App.</h1>

         <div className='row my-4'>
               <div className='col-12 col-md-6'>
                <button className='btn btn-primary saurya'>APP STORE</button>
               </div>
               <div className='col-12 col-md-6'>
                <button className='btn btn-primary saurya'>GOOGLE PLAY</button>
               </div>
         </div>

      </div>
      <div className='col-12 col-xl-4'>
        <img src={img1} className='img-fluid panu1'/>
      </div>
      </div>
    </div>
  )
}

export default Download;

import React from 'react'
import img1 from "../image/back1.jpeg"

const Order = () => {
  return (
    <div className='container-fluid my-5'>
      <div className='row text-center align-items-center'>
         <div className='col-12 col-xl-6'>
            <h1>Why Choose Us ?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <div className='row text-center'>
               <div className='col-12 col-md-4'>
                <h3>94000+</h3>
                <p>Orders</p>
               </div>
               <div className='col-12 col-md-4'>
                <h3>11000+</h3>
                <p>Customers</p>
               </div>
               <div className='col-12 col-md-4'>
                <h3>1500+</h3>
                <p>Chefs</p>
               </div>
            </div>

            <button className='btn btn-primary mb-5'>Order Now</button>

         </div>
         <div className='col-12 col-xl-6'>
            <img src={img1} className='img-fluid saurya'/>
         </div>
      </div>
    </div>
  )
}

export default Order;

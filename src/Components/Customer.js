import React from 'react'
import img1 from "../image/photo 1.jpeg"
import img2 from "../image/photo 2.jpeg"
import img3 from "../image/photo 3.jpeg"

const Customer = () => {
  return (
    <div className='container my-5'>
        <h1 className='text-center my-5'>Customers Love Us.</h1>
      <div className='row text-center'>
        <div className='col-12 col-xl-4'>
            <img src={img1} className='img-fluid panu'/>
            <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."</p>
            <h5>- Charlotte Hale</h5>
        </div>
        <div className='col-12 col-xl-4'>
            <img src={img2} className='img-fluid panu'/>
            <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."</p>
            <h5>- Adam Cuppy</h5>
        </div>
        <div className='col-12 col-xl-4'>
            <img src={img3} className='img-fluid panu'/>
            <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."</p>
            <h5>- Steven Marcetti</h5>
        </div>
      </div>
    </div>
  )
}

export default Customer;

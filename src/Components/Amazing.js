import React from 'react'
import img1 from "../image/shop1.svg"
import img2 from "../image/shop 2.svg"
import img3 from "../image/shop3.svg"

const Amazing = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center mb-5'>Amazing Services</h1>
            <div className='row text-center'>
                <div className='col-12 col-xl-4'>
                    <img src={img1} className='img-fluid' />
                    <h3>230+ Locations</h3>
                    <p>Lorem ipsum donor amet sity ceali placeholder text</p>
                    <sapn>Learn more</sapn>
                </div>
                <div className='col-12 col-xl-4'>
                <img src={img2} className='img-fluid' />
                    <h3>Professional Chefs</h3>
                    <p>Lorem ipsum donor amet sity ceali placeholder text</p>
                    <sapn>Learn more</sapn>
                </div>
                <div className='col-12 col-xl-4'>
                <img src={img3} className='img-fluid' />
                    <h3>Birthday Catering</h3>
                    <p>Lorem ipsum donor amet sity ceali placeholder text</p>
                    <sapn>Learn more</sapn>
                </div>
            </div>
        </div>
    )
}

export default Amazing;

import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid my-5 panu3 py-5'>

        <div className='row'>

            <div className='col-12 col-md-6 col-xl-3'>
                <h4>Main</h4>
                <ul>
                    <li>Blog</li>
                    <li>FAQs</li>
                    <li>Support</li>
                    <li>About Us</li>
                </ul>
            </div>

            <div className='col-12 col-md-6 col-xl-3'>
                <h4>Product</h4>
                <ul>
                    <li>Log in</li>
                    <li>Personal</li>
                    <li>Business</li>
                    <li>Team</li>
                </ul>
            </div>

            <div className='col-12 col-md-6 col-xl-3'>
                <h4>Press</h4>
                <ul>
                    <li>Logos</li>
                    <li>Events</li>
                    <li>Stories</li>
                    <li>Office</li>
                </ul>
            </div>

            <div className='col-12 col-md-6 col-xl-3'>
                <h4>Legal</h4>
                <ul>
                    <li>GDPR</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Service</li>
                    <li>Disclaimer</li>
                </ul>
            </div>

        </div>
      
    </div>
  )
}

export default Footer;

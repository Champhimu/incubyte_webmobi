import React from 'react'
import Ellipse1 from '../Assets/Ellipse 1-1.png'
import Ellipse2 from '../Assets/Ellipse 1.png'
import Ellipse3 from '../Assets/Ellipse 2.png'
import Team from '../Assets/Creative team-pana 1.png'

const Banner = () => {
  return (
    <>
     <div id='home' className='bg-primary-subtle position-relative vh-100'>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-center'>
                    <h1 className='fw-bold'>Welcome to <span className='text-primary'>Incubyte</span></h1>
                    <p className='lead my-3'>Building bridges to success in the tech ecosystem</p>
                    <img className='w-75 img-fluid' src={Team} alt="" />
                </div>
            </div>

            <img className='d-none d-md-block position-absolute top-50 end-0 translate-middle-y h-80' src={Ellipse2} alt="" />
            <img className='position-absolute top-0 start-0 w-25' src={Ellipse3} alt="" />
            <img className='position-absolute top-100 start-0 translate-middle h-50' src={Ellipse1} alt="" />
        </div>
    </>
  )
}

export default Banner
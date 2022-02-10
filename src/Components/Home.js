import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import Services from './Services'

const Home = () => {
  const   Navigate = useNavigate()

  document.addEventListener('DOMContentLoaded', function ()
   {window.setTimeout(document.querySelector('svg').classList.add('animated'),1000);
})  
 const bookNow =()=>{

       Navigate('/booking')
    
 }     

    return (
        <>
            <div className='mt-5 container'>
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <h1 className=' mt-5 text-right fw-bolder'>Are You want decorate Your Event .. ?</h1>
                         <h4 className='fst-italic'>We are here...</h4> <br></br>
                         <p className='fst-italic'>Shri Decoration is a Event Decoration Firm.<br></br>
                         We provide Balloon Decoration And Flowers Decoration Services <br></br>for every types of events . </p>
                 
                    <button  onClick={bookNow} className=' mt-3  px-4 py-3 rounded-pill fw-bold fs-5 btn btn-primary text-white'>Book Now</button>    
                 
                    </div>
                    <div className="col-sm-6 " >
                        {/* <img src='./images/party.png' alt=''/> */}

                     <div className='py-3'>
                        <img src="./images/birthday3.gif" alt="Cup of coffee on saucer"/></div>

                    </div>
                </div>
            </div>




            <Services/>
        </>
    )
}

export default Home




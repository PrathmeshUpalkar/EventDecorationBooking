import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

const Services = () => {
 
 const Dir = useNavigate()
 
 const Decoration = () =>{
         
   Dir('/secondService')

 }

  return(
      <>
      <div className=' mt-5 container'>
        <h2 className='mt-5 text-center'>Services </h2>


        <div className="row mt-5">
                    <div className="col-sm-6">
                    <div className='card ' >
                     <img src="./images/b2.jpg" style={{'height':'420px'}} />
                      <div className='card-body'>
                      <h4 className='text-center'>Balloon Decoration</h4>
                      <p className='mt-3'>We Provide the Balloon decoration service in pune city And near Pune 
                       we Provide this service for Birthdat Event ,Aniverssury , Valentine day Decoration 
                        </p>
                      <button  onClick={Decoration} className='btn btn-primary te'>Balloon Decoration</button>


                      </div>
                    </div> 
                 
                    </div>
                    <div className="col-sm-6">
                    <div className='card'>
                    <img src="./images/F1.jpg" />
                      <div className='card-body'>
                      <h4 className='text-center '>Flowers Decoration</h4>
                      <p className='mt-3'>We Provide the Flowers decoration service in pune city And near Pune 
                       we Provide this service for Birthdat Event ,Aniverssury , Valentine day Decoration 
                        </p>
                      <button onClick={Decoration} className='btn btn-primary te'>Flowers Decoration</button>

                      </div>
                    </div> 
                    </div>
                   
                    
                </div>



      </div>
           
     </>
  )
};

export default Services;

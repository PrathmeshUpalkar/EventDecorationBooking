import React from 'react'
import { useNavigate } from 'react-router-dom'

const SecService = () => {

    const Navigate=useNavigate() 

 const OnBook = ()=>{

    Navigate('/booking')
 }

  return (
    <>

<div className=' mt-5 container'>
        <h2 className='mt-5 text-center'>Services </h2>


        <div className="row mt-5">
                    <div className="col-sm-4">
                    <div className='card ' >
                     <img src="./images/Ani.gif" style={{'height':'420px'}} />
                      <div className='card-body'>
                      <h4 className='text-center'>Anniversary Event</h4>
                      <p className='mt-3'>We Provide the Book Now service in pune city And near Pune 
                       we Provide this service for Birthdat Event ,Aniverssury , Valentine day Decoration 
                        </p>
                      <button  onClick={OnBook} className='btn btn-primary te'>Book Now</button>


                      </div>
                    </div> 
                 
                    </div>


                    <div className="col-sm-4">
                    <div className='card ' >
                     <img src="./images/bday.gif" style={{'height':'420px'}} />
                      <div className='card-body'>
                      <h4 className='text-center'>Birthday Event </h4>
                      <p className='mt-3'>We Provide the Book Now service in pune city And near Pune 
                       we Provide this service for Birthdat Event ,Aniverssury , Valentine day Decoration 
                        </p>
                      <button  onClick={OnBook} className='btn btn-primary te'>Book Now</button>


                      </div>
                    </div> 
                 
                    </div>


                    <div className="col-sm-4">
                    <div className='card ' >
                     <img src="./images/wedding.gif" style={{'height':'420px'}} />
                      <div className='card-body'>
                      <h4 className='text-center'>Weeding Event</h4>
                      <p className='mt-3'>We Provide the Book Now service in pune city And near Pune 
                       we Provide this service for Birthdat Event ,Aniverssury , Valentine day Decoration 
                        </p>
                      <button  onClick={OnBook} className='btn btn-primary te'>Book Now</button>


                      </div>
                    </div> 
                 
                    </div>
              
                    <div className="mt-3 col-sm-4">
                    <div className='card ' >
                     <img src="./images/Valentine.gif" style={{'height':'420px'}} />
                      <div className='card-body'>
                      <h4 className='text-center'>Valentine Day special </h4>
                      <p className='mt-3'>We Provide the Balloon decoration service in pune city And near Pune 
                       we Provide this service for Birthdat Event ,Aniverssury , Valentine day Decoration 
                        </p>
                      <button  onClick={OnBook} className='btn btn-primary te'>Book Now</button>


                      </div>
                    </div> 
                 
                    </div>



                    <div className="mt-3 col-sm-4">
                    <div className='card ' >
                     <img src="./images/happy.gif" style={{'height':'420px'}} />
                      <div className='card-body'>
                      <h4 className='text-center'>Corperate Events </h4>
                      <p className='mt-3'>We Provide the Balloon decoration service in pune city And near Pune 
                       we Provide this service for Birthdat Event ,Aniverssury , Valentine day Decoration 
                        </p>
                      <button  onClick={OnBook} className='btn btn-primary te'>Book Now</button>


                      </div>
                    </div> 
                 
                    </div>

                    <div className="mt-3 col-sm-4">
                    <div className='card'>
                    <img src="./images/Welcome.gif" />
                      <div className='card-body'>
                      <h4 className='text-center '>Get To Gather</h4>
                      <p >We Provide the Flowers decoration service in pune city And near Pune 
                       we Provide this service for Birthdat Event ,Aniverssury , Valentine day Decoration 
                        </p>
                      <button onClick={OnBook} className='btn btn-primary te'>Book Now</button>

                      </div>
                    </div> 
                    </div>
                   
                    
                </div>



      </div>




    
           
    </>
  )
}

export default SecService
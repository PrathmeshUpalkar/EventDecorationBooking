
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {

  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [date, setDate] = useState();
  const [ename, setEname] = useState();


  const Navigate = useNavigate()

  const onBook = async () => {

    let result = await fetch('http://localhost:5000/mail', {
      method: 'post',
      body: JSON.stringify({ name, city, email, contact, ename, date }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.log(result)
    if (result) {
      alert(`Hello ${name} your booking is done we will contact you in next 24hrs`);
      Navigate('/')
    }



  }
  return (
    <>

      <div className='mt-5 container'>
        <div className="row mt-5">
          <div className="col-sm-4">
            
          <img src="./images/celebration1.png" alt=''/>

          </div>
          <div className=" mt-4 col-sm-4">





            {/* <div className='container'> */}
              <div className='card '>
                <div className='card-body text-center'>

                  {/* <div className='mt-3 w-50 mx-auto md:max-w-xl text-center  sm:text-center'> */}

                    <h1 className='fw-bold'>Booking</h1>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter Name" /><br></br>
                    <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter City" /><br></br>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter Email Id" /><br></br>
                    <input type="text" name="contact" value={contact} onChange={(e) => setContact(e.target.value)} class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter Contact Number" /><br></br>

                    <input type="text" name="Date" value={ename} onChange={(e) => setEname(e.target.value)} class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter Event Name " /><br></br>
                    <input type="text" name="Event" value={date} onChange={(e) => setDate(e.target.value)} class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter Event Date " /><br></br>


                    <button onClick={onBook} className=' mt-3 py-2 px-4 btn btn-primary'>Book Now</button>

                  {/* </div> */}
                </div>

              </div>
            {/* </div> */}
          </div>
          <div className="col-sm-4">
          <img src="./images/Business2.gif" alt=''/>

          </div>
        </div>
      </div>
    </>
  )
};

export default Booking;

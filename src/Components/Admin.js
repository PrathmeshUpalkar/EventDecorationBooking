
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Admin = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const Navigate = useNavigate();
  
  
    const onLogin = () => {
  
    //   let result = await fetch("http://localhost:5000/login", {
    //     method: 'post',
    //     body: JSON.stringify({ email, password }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });
      
    //   result = await result.json();
    //   console.log(result);
    //   if (result.name) {
    //     localStorage.setItem('user', JSON.stringify(result))
    //     Navigate('/data')
    //   }
    //   else {
    //     alert("Enter Correct Details.")
    //   }

          if(email == 'shri' &&  password == 'shri@123')
          {
              Navigate('/data') 
               
          }
          else{
             alert("Enter Correct Details..")
             Navigate('/')
          }
     
     }
  
  
  
  
  
    
  return(
      <>

<div className='card mt-5 w-50 mx-auto md:max-w-xl text-center  sm:text-center'>
        <div className='card-body'>

          <div className='mt-3 w-75 mx-auto md:max-w-xl text-center  sm:text-center'>

            <h1 className='text-2xl text-center font-bold'>Login</h1>
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter Admin_id" /><br></br>
            <input type="password" name="email" value={password} onChange={(e) => setPassword(e.target.value)} class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter Password" /><br></br>
            <button onClick={onLogin} className='mt-3 py-2 px-3 btn btn-primary'>Login</button>&nbsp;&nbsp;



          </div>

        </div>
      </div>
      
      </>
  )
};

export default Admin;

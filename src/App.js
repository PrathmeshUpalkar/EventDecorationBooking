import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './Components/NavMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Booking from './Components/Booking';
import Admin from './Components/Admin';
import Edata from './Components/Edata';
import Services from './Components/Services';
import Home from './Components/Home';
import Footer from './Components/Footer';
import SecService from './Components/SecService';
function App() {
  return (
    <>
     <BrowserRouter>
     <NavMenu/>

     <Routes>

     <Route path='/' element={<Home/>}></Route>

       <Route path='/about' element={<About/>}></Route>
       <Route path='/booking' element={<Booking/>}></Route>
       <Route path='/admin' element={<Admin/>}></Route>
       <Route path='/services' element={<Services/>}></Route>
       <Route path='/data' element={<Edata/>}></Route>
       <Route path='/secondService' element={<SecService/>}></Route>


     </Routes>

       

     </BrowserRouter>
     <Footer/>  
      
    </>
  );
}

export default App;

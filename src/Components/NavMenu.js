import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
const NavMenu = () => {
  return (
      <>
    


<Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand className='text-lg'>Decoration</Navbar.Brand>
    <Nav className="text-right px-4">
      
      <Nav.Link>   
      <Link className='text-black' style={{'textDecoration':'none'}}  to={'/'}>Home</Link>
     </Nav.Link>
     
      <Nav.Link>   
      <Link className='text-black' style={{'textDecoration':'none'}} to={'/secondService'}>Services</Link>
     </Nav.Link>

     <Nav.Link>   
      <Link className='text-black' style={{'textDecoration':'none'}}  to={'/booking'}>Booking</Link>
     </Nav.Link>

     <Nav.Link>   
      <Link className='text-black' style={{'textDecoration':'none'}}  to={'/admin'}>Admin</Link>
     </Nav.Link>
    </Nav>
    </Container>
  </Navbar>

      </>
  )
};

export default NavMenu;

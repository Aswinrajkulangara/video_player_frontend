import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'


function Header() {
  return (
    <div >
      <Navbar className="bg-body-dark">
    <Container>
      <Navbar.Brand>
       <Link to={'/'} style={{textDecoration:'none',color:'white',fontSize:'30px'}} >
       <i style={{color:'orange'}} class="fa-solid fa-video fa-beat me-3"></i>
        video player

       </Link>
        
     
      </Navbar.Brand>
    </Container>
  </Navbar>
  <hr />

    </div>

    
   
  )
}

export default Header
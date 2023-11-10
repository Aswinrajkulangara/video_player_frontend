import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:"300px"}} className='d-flex justify-content-center align-items-center flex-column w-100'>
      <div className=' d-flex align-items-center justify-content-evenly w-100 '>
      <div className="websites " style={{width:'400px'}}>
      
     <h3 className='mb-3'><i class="fa-solid fa-video  text-warning me-3"></i> Videoplayer</h3> 
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.dfvhgsd Debitis, iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae ducimus perferendis labore?
      </p>
      
      </div>
      <div className="links d-flex  flex-column">
        
        <h4 className='links '>Links</h4>
        <Link to={"/"} style={{textDecoration:'none'}}>Landing Page</Link>
        <Link to={"/home"} style={{textDecoration:'none'}}>Home Page</Link>
        <Link to={"/watch-history"} style={{textDecoration:'none'}}>Watch History</Link>
      

      </div>
      <div className="guides d-flex  flex-column">
      <h4 className=''>Guides</h4>
      <Link to={'https://react.dev/'} style={{textDecoration:'none'}}>React</Link>
      <Link to={'https://react.dev/'} style={{textDecoration:'none'}}>bootstrap</Link>
      <Link to={'https://react.dev/'} style={{textDecoration:'none'}}>React bootsstrap</Link>


      </div>
      <div className="contacts">
      <h4 className=''>Contact us</h4>
      <div className='d-flex mb-2'>
        <input type='text' className='form-control rounded-3 h-50' placeholder='enter your email'/>
        <button className='btn btn-info rounded-3 h-50 mb-3 ms-2'>Submit</button>
      </div>
      <div className='d-flex mt-2 justify-content-evenly align-items-center'>
      <Link to={'https://react.dev/'} style={{textDecoration:'none'}}><i class="fa-brands fa-instagram fa-xl"></i></Link>
      <Link to={'https://react.dev/'} style={{textDecoration:'none'}}><i class="fa-brands fa-facebook fa-xl"></i></Link>
      <Link to={'https://react.dev/'} style={{textDecoration:'none'}}><i class="fa-brands fa-linkedin fa-xl"></i></Link>
      <Link to={'https://react.dev/'} style={{textDecoration:'none'}}><i class="fa-brands fa-x-twitter fa-xl"></i></Link>

      </div>
      </div>

      </div>
      <p className='mt-5'>Copyright @2023 ,Built with react</p>
    </div>
  )
}

export default Footer
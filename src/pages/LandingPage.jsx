import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByUrl =useNavigate()

  return (
    <>
    <Row>
      <Col></Col>
      <Col lg={5}>
        <h3>Welcome to <span style={{color:'red'}}>video player</span></h3>
        <p className='mb-3'style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dignissimos nulla dolorem dolores, eligendi accusamus ipsa voluptate sequi delectus repellendus incidunt tenetur, nisi magni sint quas nesciunt quidem pariatur beatae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque velit quis ratione numquam commodi, tenetur culpa consequatur illum est esse laboriosam mollitia aperiam perspiciatis aut deserunt odit ullam. Eaque, eligendi!</p>
        <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-warning '>Get start <i class="fa-solid fa-arrow-right"></i></button>
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" height={500} width={500} />
      </Col>
      

    </Row>
    <div className='container mt-5 mb-4 d-flex justify-content-center align-items-center flex-column'>
      <h3 className='mb-5'>Features</h3>
      <div className='cards d-flex justify-content-evenly  w-100' >

      <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>

    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>

    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>

    
      </div>
    </div>

    <div className='container border border-5 border-secondary rounded  w-100 p-5 mt-5 mb-5 d-flex align-items-center justify-content-between'>
     <Row>
      <Col lg={5}>
        <h3 className='text-warning mb-5'>Simple <span style={{color:'white'}}>and</span> powerful</h3>
        <h6 className='mb-3 'style={{textAlign:'justify'}}> <span className='fw-bold fs-5' style={{color:'violet'}}>Plays Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas repellendus quae voluptatem cumque accusamus nisi enim quod quam possimus. Earum eveniet esse adipisci quis cum asperiores praesentium fugit libero?</h6>
        <h6 className='mb-3'style={{textAlign:'justify'}}> <span className='fw-bold fs-5'style={{color:'violet'}}>Plays Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas repellendus quae voluptatem cumque accusamus nisi enim quod quam possimus. Earum eveniet esse adipisci quis cum asperiores praesentium fugit libero?</h6>
        <h6 className='mb-3'style={{textAlign:'justify'}}> <span className='fw-bold fs-5'style={{color:'violet'}}>Plays Everything</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas repellendus quae voluptatem cumque accusamus nisi enim quod quam possimus. Earum eveniet esse adipisci quis cum asperiores praesentium fugit libero?</h6>
      </Col>
      <Col></Col>
      <Col lg={6}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/s0wTdCQoc2k?si=EkBApMCFX0iamqc-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Col>
     </Row>

    </div>
    </>
  )
}

export default LandingPage
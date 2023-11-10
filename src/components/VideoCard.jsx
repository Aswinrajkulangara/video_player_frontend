import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToHistory, deleteVideo, deleteCategoryVideo } from '../services/AllAPI';
import Modal from 'react-bootstrap/Modal';



function VideoCard({displayVideo,setDeleteVideoStatus,isPresent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => 
  {
    setShow(true)
    const {caption, embedlink} = displayVideo
    const today=new Date()
    let timestamp = new Intl.DateTimeFormat('en-GB',{year:'numeric', month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    console.log(timestamp);
    let videoDetails ={
      caption,
      embedlink,
      timestamp
    }
    const response = await addToHistory(videoDetails)
    console.log(response);

  };

  const removeVideo= async (id)=>{
    const response= await deleteVideo(id)
    setDeleteVideoStatus(true)

  }
  // function to drage  a particular card

  const drageStart=(e,id)=>{
    console.log(`draged card is ${id}`);
    // to transfer id from videoCard to category
    e.dataTransfer.setData("videoId",id)

  }

  
  return (

    <>

     <Card  style={{ width: '100%', height:'350px'}} className='mb-4' draggable onDragStart={(e)=>drageStart(e,displayVideo?.id)}>
      <Card.Img onClick={handleShow} height={'280px'} variant="top" src={displayVideo.url} />
      <Card.Body>

        <Card.Title className='d-flex justify-content-between align-items-center' >
        <h6>{displayVideo.caption}</h6>
        {!isPresent ? <Button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></Button>:<Button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-danger'><i class="fa-solid fa-xmark"></i></Button>}
        </Card.Title>
        
      </Card.Body>
     </Card>

     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${displayVideo.embedlink}?autoplay=1`} title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
       
      </Modal>

    </>
  )
}

export default VideoCard
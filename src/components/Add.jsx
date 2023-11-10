import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/AllAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoStatus}) {

  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[video,setVideo]=useState({
      id:"",
      caption:"",
      url:"",
      embedlink:""
    })
    console.log(video);

    const embedVideoLink=(e)=>{
      const {value}= e.target
      console.log(value.slice(-11));
      const link=`https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedlink:link})
    }

    const handleUpload= async ()=>{
      const {id,caption,url,embedlink}=video
      if(!id || !caption || !url ||!embedlink)
      {
        toast.warning('please fill the form completely')
      }
      else
      {
        const response=await  uploadAllVideo(video)
        console.log(response);
        if(response.status>=200 && response.status<300)
        {
          setUploadVideoStatus(response.data)
          toast.success(`${response.data.caption} succesfully uploaded`)

          // to make the state into initial state
          setVideo({
            id:"",
            caption:"",
            url:"",
            embedlink:""

          })
          // to close modal
          handleClose()

        }
        else
        {
          console.log(response);
          toast.error('something went wrong try again')
        }

      }
    }
  

  return (
 
       <>
            <div className='d-flex align-items-center'>
                <h5>Upload New Videos</h5>
                <button onClick={handleShow} className='btn'> <i class="fa-solid fa-cloud-arrow-up"></i></button>
        
            </div>

            
            
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Upload videos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>please fill the form completly </p>
    
                    <form className='border border-secondary rounded p-3'>

                       

                       <Form.Group className='mb-3' controlId='forBasicEmail'>
                            <Form.Control onChange={(e)=>setVideo({...video,id:e.target.value})} type='text ' placeholder='enter video id'>
    
                            </Form.Control>
    
                       </Form.Group>

                       <Form.Group className='mb-3' controlId='forBasicEmail'>
                            <Form.Control type='text ' placeholder='enter video caption' onChange={(e)=>setVideo({...video,caption:e.target.value})}>
    
                            </Form.Control>
    
                       </Form.Group>

                       <Form.Group className='mb-3' controlId='forBasicEmail'>
                            <Form.Control type='text ' placeholder='enter video image 'onChange={(e)=>setVideo({...video,url:e.target.value})}>
    
                            </Form.Control>
    
                       </Form.Group>

                       <Form.Group className='mb-3' controlId='forBasicEmail'>
                            <Form.Control type='text ' placeholder='enter video url' onChange={embedVideoLink} >
    
                            </Form.Control>
    
                       </Form.Group>
                     </form>
                 
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button onClick={handleUpload} variant="primary">Upload</Button>
                </Modal.Footer>
              </Modal>
              <ToastContainer position='top-center' theme='coloured' autoClose={2000} />

            


           
        
       </>

  )
}

export default Add;






//"https://www.youtube.com/embed/s0wTdCQoc2k?si=grPzaJF-Uq_F4eSi"
//https://www.youtube.com/watch?v=s0wTdCQoc2k
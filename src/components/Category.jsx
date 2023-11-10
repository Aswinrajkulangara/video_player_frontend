import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addToCategory, deleteCategory, updateCategory } from '../services/AllAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllCategory, getCategoryVideo } from '../services/AllAPI';
import {Col,Row} from 'react-bootstrap'
import VideoCard from './VideoCard';




function Category() {
  const [categoryData,setCategoryData]=useState([])
  const[categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// function to add category
  const addACategory=async()=>{
    console.log(categoryName);
    if(categoryName)
    {
      let body={
        categoryName,
        allVideos:[]
      }

      const response= await addToCategory(body)
           console.log(response);

           if(response.status>=200 && response.status<300)
           {
            toast.success('category added succesfully')
            // 
            // to emptyn the state 
            setCategoryName("")
            // close modal
            handleClose()


           }
           else
           {
            toast.error('something went wrong')
           }

      

      
      


    }

    else
    {
      toast.warning('please fill the category name')
    }
  }

  // function to get category
  const allCategory = async()=>{
    const {data}= await  getAllCategory()
    // console.log(data);
    setCategoryData(data)

  }
  console.log(categoryData);

// function to delete category
  
const removeCategory= async(id)=>{
  await deleteCategory(id)
  // to get remaining category
  allCategory()


}
// function to prevent reload 


const dragOver=(e)=>{
  e.preventDefault()
}
// 
const videoDrop= async(e,categoryid)=>{
  console.log(`category in which video card id dropped:${categoryid}`);
  let videoId=e.dataTransfer.getData("videoId")
  console.log(videoId);
 // api to get getCategoryVideo
  const {data}= await getCategoryVideo(videoId)
  console.log(data);

  let selectedCategory=categoryData.find((item)=>item?.id===categoryid)
  console.log(selectedCategory);

  selectedCategory.allVideos.push(data)

  await updateCategory(categoryid,selectedCategory)
     allCategory()

  






}


  useEffect(()=>{
    allCategory()

  },[])


  return (
    <>
    <div className='d-grid ms-3'>
        <button onClick={ handleShow} className='btn btn-warning'>Add new category</button>
    </div>

    {categoryData.length>0?
    categoryData?.map((item)=>(
      <div className='m-5 border border-warning rounded p-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e, item?.id)} >
      <div className='d-flex justify-content-between align-items-center'>
        <h6>{item.categoryName}</h6>
        <button onClick={()=>removeCategory(item?.id)} className='btn btn-outline-danger'><i class='fa-solid fa-trash-can'></i></button>

      </div>
      <Row>
        <Col>
        {
          item?.allVideos.length>0?
          item.allVideos.map((card)=>(<VideoCard displayVideo={card} isPresent ={true} />))
          :<p> nothing to display</p>
        }

        </Col>
      </Row>

    </div>

    ))
       : <p>nothing to display</p>
    }




    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> <i class="fa-solid fa-pencil text-warning me-2">Add New Category</i></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-secondary rounded p-3'>

          <Form.Group className='mb-3' controlId='forBasicEmail'>
                            <Form.Label> Category Name</Form.Label>

                            <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type='text ' placeholder='enter category name'/>
    
                       </Form.Group>
            
          </form>

          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addACategory} variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='coloured' autoClose={2000} />
    </>
  )
}

export default Category
import React, { useEffect, useState } from 'react'
import {Col,Row} from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/AllAPI'

function View({uploadVideoStatus}) {

  const [allVideo , setAllVideo]=useState([])

  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)

  const getAllUploadedVideos= async()=>{
    const response = await getAllVideos()
    // console.log(response);
    const {data} = response

    // console.log(data);
    setAllVideo(data)
  }

  console.log(allVideo);
  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoStatus,deleteVideoStatus])
  return (
    <>
    <Row>
        { allVideo.length>0?
        allVideo.map((video)=>(
          <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard  displayVideo={video} setDeleteVideoStatus={setDeleteVideoStatus} />
          </Col>

        ))
          :
          // <div>
            <p>no videos found</p>
             /* <button className='btn btn-outline-warning'>add videos</button> */

          // </div>
         
          
          
          
        }
    </Row>
    </>
  )
}

export default View
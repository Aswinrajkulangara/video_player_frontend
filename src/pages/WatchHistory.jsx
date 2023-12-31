import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteAHistory, getAllHistory } from '../services/AllAPI'

function WatchHistory() {
 const [history,setHistory]=useState([])

  const WatchAllHistory = async()=>{
    const {data}= await getAllHistory()
    // console.log(data);
    setHistory(data)
  }
  console.log(history);
  // function to remove a perticular history
  const removeAHistory =async(id)=>{
    await deleteAHistory(id)
    // to get remaining history
    WatchAllHistory()

  }

  
  
  useEffect(()=>{
    WatchAllHistory()
  },[])
  return (
    <>
    <div className='container mt-5 d-flex justify-content-between'>
      <h3>Watch History</h3>
      <Link to={'/home'} className='d-flex align-items-center' style={{textDecoration:'none',color:'violet',fontSize:'20px',}}> <i className='fa-solid fa-arrow-left fa-beat me-2'></i> Back <span style={{color:'white'}}> To </span> Home</Link>
    </div>
    <table  className='table  table-striped-columns  mt-5 mb-5 container '>
      <thead>
        <tr>
          <th>#</th>
          <th>caption</th>
          <th>url</th>
          <th>time stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       { history.length>0?
       history.map((item,index)=>(
        <tr>
            <td>{index+1}</td>
            <td>{item.caption}</td>
            <td> <a href={item.embedlink} target='_blank'>{item.embedlink}</a></td>
            <td>{item.timestamp}</td>
            <td>
              <button onClick={()=>removeAHistory(item?.id)}  className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button></td>
          </tr>

       ))         
        :
          <p>nothing to display</p>
        }
      </tbody>
    </table>
    <div className='d-flex justify-content-center '>
      <button className='btn btn-outline-danger'>delete all history</button>
    </div>
    </>
  )
}

export default WatchHistory
import { CommonAPI } from "./CommonAPI"
import {ServerURL} from "./ServerURL"

// uplode videos

 export const uploadAllVideo= async (reqBody)=>{
   return  await CommonAPI('POST',`${ServerURL}/videos`,reqBody)
}
// get video from json_server

 export const getAllVideos = async()=>{
    return await CommonAPI('GET',`${ServerURL}/videos`,"")
}
// api delete from

export const deleteVideo = async(id)=>{
   return await CommonAPI('DELETE',`${ServerURL}/videos/${id}`,{})
}
// api to add data to watch-history

export const addToHistory = async(videoDetails)=>{
   return await CommonAPI('POST',`${ServerURL}/history`,videoDetails)
}
// api to get all hostory
export const getAllHistory = async()=>{
   return await CommonAPI('GET',`${ServerURL}/history`,"")
}

// api to delete history




export const deleteAHistory = async(id)=>{
   return await CommonAPI('DELETE',`${ServerURL}/history/${id}`,{})
}

// remove all history
export const deleteAllHistory = async()=>{
   return await CommonAPI('DELETE',`${ServerURL}/history`,{})
}
// ============================










// api to add categories
export const addToCategory = async(body)=>{
   return await CommonAPI('POST',`${ServerURL}/categories`,body)
}

// api to get category 

export const getAllCategory = async()=>{
   return await CommonAPI('GET',`${ServerURL}/categories`,"")
}
// api to delete the category
export const deleteCategory = async(id)=>{
   return await CommonAPI('DELETE',`${ServerURL}/categories/${id}`,{})
}
// api to get a perticular video v
export const getCategoryVideo = async(id)=>{
   return await CommonAPI('GET',`${ServerURL}/videos/${id}`,"")
}

// api to 
export const updateCategory = async(id,body)=>{
   return await CommonAPI('PUT',`${ServerURL}/categories/${id}`,body)
}

// api to delete video from category
export const deleteCategoryVideo = async(id)=>{
   return await CommonAPI('DELETE',`${ServerURL}/categories/${id}`,{})
}











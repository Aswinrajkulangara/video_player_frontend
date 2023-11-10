import axios from "axios"

export const CommonAPI=async(httpMethod,url,reqBody)=>{
    let reqconfig={
        
            method: httpMethod,
            url:url, //url ( if both key and value are same )
            data:reqBody,
            Headers:{
                "content-Type":"application/json"
            }

        

    }
    return await axios (reqconfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })


}


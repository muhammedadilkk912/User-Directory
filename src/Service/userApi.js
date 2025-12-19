
import axios from "axios"
let api= "https://jsonplaceholder.typicode.com/users"

export const getUsers=async()=>{
    const response=await axios.get(api)
    // console.log(response.data)
    return response.data

}
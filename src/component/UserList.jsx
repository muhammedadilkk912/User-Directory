import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const UserList = ({users,open}) => {
    console.log("data111=",users)
     if (!users || users.length === 0) {

      console.log("inside the if")
      return(
         <p className="mt-5 text-center text-gray-500">
      Oops! Nothing matches your filter.
    </p>
      )
    }
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> 
  {users?.map((data, index) => (
    <div
      key={index}
      className="flex justify-between transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 items-center gap-10 px-4 py-3 rounded-lg bg-white-100 shadow-md "
    >
      <div className="flex flex-col">
        <h3 className="text-sm sm:text-lg  font-semibold">{data?.name || "adil kk"}</h3>
        <span className="text-sm text-gray-600 break-all sm:break-normal">
          {data?.email || "dsajjk"}
        </span>
        <span className="text-sm text-gray-600">
          {data?.phone || "djsakhfk"}
        </span>
      </div>

      <div  onClick={()=>open(data)} className="p-2 text-gray-500 rounded-full hover:bg-gray-200 cursor-pointer">
  <FaArrowRight size={20} />
</div>

    </div>
  ))}
</div>

  )
}

export default UserList

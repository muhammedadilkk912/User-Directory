import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { IoIosBusiness } from "react-icons/io";
import { SlGlobe } from "react-icons/sl";



const UserCard = ({open,data,onClose}) => {
  console.log("data in user card",data)
      if (!open) return null; // do not render anything when closed 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="w-full max-w-md rounded-lg bg-white py-4 shadow-lg">
        <div className="flex  justify-between border-b px-4 py-2 border-gray-300 items-center mb-4">

          <h2 className="text-lg font-semibold">User details : {data?.name}</h2>
          <button
            className="text-gray-500 rounded-full px-1 cursor-pointer hover:bg-gray-200"
            onClick={onClose}

          >
            ✕
          </button>
        </div>
        <div className="flex flex-col gap-4 px-4">
  {/* Address */}
  <div className="flex gap-3">
    <div className="flex items-start gap-2 w-28">
      <IoLocationOutline />
      <span className="font-medium">Address</span>
    </div>
    <div className="text-sm  text-gray-700">
      <p>
        {data?.address?.city}, {data?.address?.street},<br />
        {data?.address?.suite}, {data?.address?.zipcode}
      </p>
    </div>
  </div>

  {/* Company */}
  <div className="flex gap-3">
    <div className="flex items-start gap-2 w-28">
      <IoIosBusiness />
      <span className="font-medium">Company</span>
    </div>
    <div className="text-sm text-gray-700">
      <p>{data?.company?.name || data?.name}</p>
    </div>
  </div>

  {/* Website */}
  <div className="flex gap-3">
    <div className="flex items-start gap-2  w-28">
      <SlGlobe />
      <span className="font-medium">Website</span>
    </div>
    <div className="text-sm text-blue-700">
      <p>{data?.website}</p>
    </div>
  </div>
</div>

        {/* content */}

        <div className="mt-4 px-4 flex justify-end">

          <button
            className="px-3 py-1 text-sm  rounded-md border border-gray-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserCard

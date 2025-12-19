import React from 'react'
import { ImSad } from "react-icons/im";



const ErrorCard = ({onRetry}) => {
    // console.log("inside error card")
  return (
   <div className="flex items-center min-h-screen  justify-center px-4 py-10">
      <div className="w-full max-w-lg rounded-2xl bg-white px-8 py-10 shadow-lg">
        <div className="flex flex-col items-center text-center gap-4">
          {/* icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-3xl text-gray-500">
           <ImSad />

          </div>

          {/* title */}
          <h2 className="text-xl font-semibold text-rose-500">
            Failed to Load Users
          </h2>

          {/* description */}
          <p className="text-sm text-gray-600">
            There was an error fetching user data. Please check your
            connection and try again.
          </p>

          {/* retry button */}
          <button
            onClick={onRetry}
            className="mt-4 rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorCard

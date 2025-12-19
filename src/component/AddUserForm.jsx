import React, { useState } from 'react'

const AddUserForm = ({onClose,onSubmit}) => {
    const [data,setData]=useState({
        name:'',
        email:'',
        phone:''
    })
    const [errors, setErrors] = useState({
  name: "",
  email: "",
  phone: "",
});


    const validation = () => {
  const newErrors = {};

  // Name validation
  if (!data.name.trim()) {
    newErrors.name = "Name is required";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!emailRegex.test(data.email)) {
    newErrors.email = "Invalid email format";
  }

  // Phone validation
  const phoneRegex = /^[0-9]{10}$/;
  if (!data.phone.trim()) {
    newErrors.phone = "Phone is required";
  } else if (!phoneRegex.test(data.phone)) {
    newErrors.phone = "Phone number must be 10 digits";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};


    const handleSubmit = (e) => {
  e.preventDefault();

  if (validation()) {
    console.log("Form submitted successfully");
    onSubmit(data);
  }
};

  return (
   <div className="flex items-center justify-center px-4 py-6 bg-gray-50">
  <div className="w-full max-w-md flex flex-col gap-4">
    {/* Title */}
    <div className="text-center">
      <h1 className="text-xl font-semibold text-gray-800">Add New User</h1>
      <p className="mt-1 text-sm text-gray-500">
        Fill in the details below to add a new user to the directory.
      </p>
    </div>

    {/* Card */}
    <div className="rounded-lg border border-gray-200 bg-white shadow-md w-full px-5 py-5 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-medium text-gray-800">User Information</h2>
        <p className="text-sm text-gray-500">
          Ensure all required fields are accurately completed.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <div className={`h-10 rounded-md flex items-center border border-gray-300  ${errors.name ? "border-red-500" : "border-gray-300"} focus-within:border-blue-500`}>
            <input
              className="w-full h-full bg-transparent text-sm px-3 outline-none text-gray-800"
              placeholder="Full Name"
              type="text"
              name="name"
              value={data.name}
              onChange={(e)=>setData({...data,name:e.target.value})}
            />
          </div>
           {errors.name && (
  <p className="text-red-500 text-xs mt-1">
    {errors.name}
  </p>
)}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <div className={`h-10 rounded-md flex items-center border border-gray-300  ${errors.email ? "border-red-500" : "border-gray-300"} focus-within:border-blue-500`}>
            <input
              className="w-full h-full bg-transparent text-sm px-3 outline-none text-gray-800"
              placeholder="example@domain.com"
              type="text"
              name="email"
              value={data.email}
              onChange={(e)=>setData({...data,email:e.target.value})}
            />
          </div>
         {errors.email && (
  <p className="text-red-500 text-xs mt-1">
    {errors.email}
  </p>
)}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Phone <span className="text-red-500">*</span>
          </label>
          <div className={`h-10 rounded-md flex items-center border border-gray-300  ${errors.phone ? "border-red-500" : "border-gray-300"} focus-within:border-blue-500`}>
            <input
              className="w-full h-full bg-transparent text-sm px-3 outline-none text-gray-800"
              placeholder="75374893492"
              type="text"
              name="phone"
              value={data.phone}
              onChange={(e)=>setData({...data,phone:e.target.value})}
            />
          </div>
           {errors.phone && (
  <p className="text-red-500 text-xs mt-1">
    {errors.phone}
  </p>
)}
        </div>

        {/* Buttons */}
        <div className="flex justify-end items-center gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-2 text-sm rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>


  )
}

export default AddUserForm

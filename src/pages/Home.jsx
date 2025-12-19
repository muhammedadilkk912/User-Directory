import React, { useEffect, useState } from "react";
import { getUsers } from "../Service/userApi";
import UserList from "../component/UserList";
import UserCard from "../component/UserCard";
import { CgUserAdd } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import AddUserForm from "../component/AddUserForm";
import toast from "react-hot-toast";
import ErrorCard from "../component/ErrorCard";
import { IoMdContacts } from "react-icons/io";



const Home = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [showForm,setShowForm]=useState(false)
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)
  const fetchUsers = async () => {
      setError(false)
      try {
        setLoading(true)
        const data = await getUsers();
        console.log("data=", data);
        setUsers(data);
      } catch (err) {
        setError(true)
        // setError("Something went wrong");
      } finally {
     setLoading(false);
      }
    };
  useEffect(() => {
    
    fetchUsers();
  }, []);
  const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase()) ||
  user.email.toLowerCase().includes(search.toLowerCase())
);
 
if (loading) {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
      <p className="text-gray-400 text-xs sm:text-lg">Loading, please wait...</p>
    </div>
  );
}
if(error)return <ErrorCard onRetry={fetchUsers}/>

// if (error) {
//   return (
//     <ErrorState message={error} /> // your custom component
//   );
// }


  // console.log("user=", users);
  const handleUserClick = (data) => {
    console.log("selected user", data);  
    setSelectedUser(data);
    setOpen(true);
  };
  const handleSubmit=(data)=>{
    console.log("inside the handle submit",data)
    setUsers((prevUsers) => [...prevUsers, data]);
    console.log("users after adding=",users)
    toast.success("User added successfully")
     setShowForm(false)
  }

  return (
    <div className="flex flex-col">
      {/* header section */}
      <div className="border-b   px-4 h-14 sm:h-16 sm:px-20 border-gray-400">
        <div className="flex items-center   h-full gap-2">
          <div className="flex justify-center text-white items-center p-2  rounded bg-blue-400">
            <IoMdContacts size={24} />
   

          </div>
          <div>
            <h1 className="text-blue-500 sm:text-2xl font-semibold">User Directory</h1>
          </div>

        </div>

      </div>
      {/* body section start here */}
      <div className="flex flex-col gap-5 mx-auto my-5 sm:mx-20">
        
        

       
        {
          showForm ? <AddUserForm onSubmit={handleSubmit} onClose={()=>setShowForm(false)}/>
          :(
            <>
                  {/* search bar section */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {/* Search box */}
          <div className="w-full md:w-10/12">
            <div className="flex items-center w-full rounded-lg border border-gray-300 bg-white px-3 py-2">
              <span><CiSearch /></span>
              <input
                type="search"
                  value={search} 
                  onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or email"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          {/* Add user button */}
          <div className="w-full md:w-auto">
            <button onClick={()=>setShowForm(true)} className="flex w-full md:w-auto items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              <CgUserAdd />
              <span>Add New User</span>
            </button>
          </div>
        </div>
        {/* search bar section end */}

         <UserList users={filteredUsers} open={handleUserClick} />
        {open && (
          <UserCard
            open={open}
            data={selectedUser}
            onClose={() => {
              setOpen(false), setSelectedUser(null);
            }}
          />
        )}
      </>)
          
        }
      </div>
    </div>
  );
};

export default Home;

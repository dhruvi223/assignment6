import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';  

function Navbar() {

  const navigate = useNavigate();
  // const loggedinuser = JSON.parse(localStorage.getItem("loggedInUser"));
  // const email = loggedinuser.email;

  // const users = JSON.parse(localStorage.getItem("users"));
  // const user = users.find(user => user.email === email);
  // console.log(user);
  const loggedin = localStorage.getItem("loggedInUser");
  const handleClick = () => {
    if (loggedin == null) {
      toast.error("user is not logged in");
    } else {
      navigate("/cart");
    }
  };


  const handleLogout = () => {
    navigate('/signin')
    localStorage.removeItem("loggedInUser");
  };

  return (
    <div >
      <header className="bg-black shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="text-sm sm:text-xl flex flex-wrap">
            <span className="text-white">My Online Shpping Website</span>
          </h1>
        </Link>


        <ul className="flex gap-4">



        {loggedin !== null ? (

        //   <li 
        //      className="text-white hover:underline" 
        //       onClick={() => {
          
        //       localStorage.removeItem('loggedInuser');
              
        // }}>
        <button  className="text-white"  onClick={handleLogout}>Logout</button>
    
      ) : (
        <Link to={"/signin"}>
        <li className="text-white hover:underline">Sign In</li>
      </Link>
      )}

          {/* {user ? ( */}

            <div>
            <button onClick={handleClick}>
              <li className="text-white hover:underline">View cart</li>
            </button>

            </div>
          {/* ):  */}
          {/* <Link to={"/signin"}>
              <li className="text-white hover:underline">Sign In</li>
            </Link> */}
          {/* }  */}

        </ul>
      </div>
    </header>
    </div>
  )
}

export default Navbar

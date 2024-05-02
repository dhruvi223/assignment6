import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
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

          {/* {!loggedIn && ( */}
            <Link to={"/login"}>
              <li className="text-white hover:underline">Sign in</li>
            </Link>
          {/* )} */}

        </ul>
      </div>
    </header>
    </div>
  )
}

export default Navbar

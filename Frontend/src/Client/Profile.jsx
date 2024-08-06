import React, { useContext } from 'react'
import Usercontext from '../context/Usercontext';
import { Link, useNavigate } from 'react-router-dom';

export default function Profile() {
  let navigation=useNavigate()
    let { profile,setAuth } = useContext(Usercontext);
    function handleLogout(){
      localStorage.removeItem('token')
      window.location.reload()
      navigation('/')
      setAuth({token:null, isAuthenticated: false, userId: ''})
    }
  return (
    <section className="px-2 py-10 md:px-0">
      <div className="mx-auto max-w-4xl">
        <div className="sm:flex sm:items-center sm:justify-center sm:space-x-14 sm:flex-row flex items-center flex-col">
          <div className="relative h-48 w-48 flex-shrink-0">
            <img
              className="relative h-48 w-48 rounded-full object-cover"
              src={`http://localhost:3000/${profile.image}`}
            alt=""
            />
            {/* <input type="file"/> */}
          </div>

          <div className="mt-10 md:mt-0">
            <p className="mt-7 text-lg font-semibold text-black">{profile.username}</p>
            <p className="mt-1 text-base text-gray-600">{profile.email}</p>
          </div><br />
          <Link
            to={'/'}
          onClick={()=>handleLogout()}
          className='text-red-500 font-bold'>LOGOUT
          </Link>
        </div>
      </div>
    </section>
  )
}

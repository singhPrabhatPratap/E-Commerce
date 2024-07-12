import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Usercontext from "../context/Usercontext";

export default function ClientNav() {
  const ref = useRef(null)
  let {setCartcat,cartcat}=useContext(Usercontext) 
  let { count, setCount } = useContext(Usercontext);
  let [result, setResult] = useState([]);
  let { total, clientlog } = useContext(Usercontext);
  let { profile } = useContext(Usercontext);
  let [search, setSearch] = useState("");
  // console.log(cartcat)
  async function searches() {
    let result = await axios.get(
      `http://localhost:3000/api/getDatabysearch/${search}`
    );
   const searchStart = search ? [...result.data.map((pro) => pro.productType)] : [];
    setResult(searchStart);
  }
  useEffect(() => {
    searches();
  }, [search]);

  let navli = [
    'ALL','Mens','Womens','Electronics','Jewellery'
  ]

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
     setResult([])
    }
  };

// if(result.length>0){
  document.addEventListener("click", handleClickOutside);
// }
  return (
    <div>
      <div className="navbar bg-base-100 bg-blue-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-blue-800 font-bold">
            DeVKart
          </a>
        </div>  
       <div className="font-bold gap-5">
      {navli.map((lis)=>(
         <Link
         to={'/cards'}
         onClick={(e)=>{setCartcat(e.target.innerHTML)}
         }
         >{lis}</Link>
      ))}
      
       </div>
        <div className="flex-none">
          <input
            className={`h-10 w-[250px] rounded-md bg-gray-100 p-2 focus:outline-none focus:text-gray-600 mx-3`}
            placeholder="Search..."
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
          {result.length>0 && (
             <div ref={ref} className="absolute top-20 bg-white w-[270px] h-[400px] flex flex-col rounded-md shadow-lg p-2 z-20 overflow-y-auto">
             {result.map((result, index) => (
                <Link 
                to={'/cards'}
                key={index} className="p-2 hover:bg-gray-200"
                onClick={(e)=>setCartcat(e.target.innerHTML)}
                >
                  {result}
                </Link>
             ))}
           </div>
          )}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator" to={"/cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span
                  className={`bg-red-500 text-white badge badge-m indicator-item ${
                    count > 0 ? "block" : "hidden"
                  }`}
                >
                  {count}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{count} Items</span>
                <span className="text-info">Subtotal: {total}</span>
                <div className="card-actions">
                  <Link to={"/cart"} className="btn btn-primary btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end mx-3">
            {clientlog ? (
              <Link to={"/profile"} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="img"
                    src={`http://localhost:3000/${profile.image}`}
                  />
                </div>
              </Link>
            ) : (
              <Link
                to={"/clientlogin"}
                className="border-emerald-500 text-blue-500 font-bold"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

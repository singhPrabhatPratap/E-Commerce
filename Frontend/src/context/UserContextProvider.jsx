import React, { useEffect, useState } from "react";
import UserContext from "./Usercontext.js";
import axios from 'axios'

export default function UserContextProvider({ children }) {
  let [pass, setPass] = useState(false);
  let [fil, setFil] = useState("");
  let [clientlog, setClientlog] = useState("");
  let [count, setCount] = useState(0);
  let [total, setTotal] = useState(0);
  let [profile, setProfile] = useState({});
  let [cartcat, setCartcat] = useState("");
  let [show, setShow] = useState("");

  let token = async()=>{
    let val = localStorage.getItem('token')
    if(val){
      let result = await axios.get('http://localhost:3000/User/verify')
      // console.log(result.data[0])
    }
  }
  useEffect(()=>{
    let val = localStorage.getItem('token')
    if(val){
      axios.defaults.headers.common['Authorization']=`Bearer ${val}`
    }
token()
  },[])
  
  return (
    <UserContext.Provider
      value={{
        pass,
        setPass,
        clientlog,
        setClientlog,
        count,
        setCount,
        total,
        setTotal,
        profile,
        setProfile,
        cartcat,
        setCartcat,
        fil,
        setFil,
        show, setShow
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

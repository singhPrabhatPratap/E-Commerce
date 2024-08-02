import React, { useEffect, useState } from "react";
import UserContext from "./Usercontext.js";
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function UserContextProvider({ children }) {
  let navigation = useNavigate();
  let [pass, setPass] = useState(false);
  let [fil, setFil] = useState("");
  let [clientlog, setClientlog] = useState("");
  let [count, setCount] = useState(0);
  let [total, setTotal] = useState(0);
  let [profile, setProfile] = useState({});
  let [cartcat, setCartcat] = useState("");
  let [show, setShow] = useState("");
  let [ auth , setAuth] = useState({
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    userId: ''
  })

  let userLogin=async(data)=>{
    try {
      let result = await axios.post("http://localhost:3000/User/UserLogin", data);
      let unique = data.email.split("@")[0];
      localStorage.setItem('token',result.data.tokens)

      if (result.data.success) {
        setClientlog(unique)
        setProfile(result.data.user);
        navigation("/");
        getCart(unique);
        console.log(unique)
        let token = result.data.tokens
        toast.success(result.data.message);
        setAuth({token, isAuthenticated: true, userId: unique})
      
        await axios.post(
          `http://localhost:3000/clientTable/CreateCleintTable/${unique}`
        );
      } else {
        toast.error(result.data.message || 'Please Enter a valid Email or Password');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }
  }
  async function getCart(unique) {
    let result = await axios.get(
      `http://localhost:3000/clientTable/getCart/${unique}`
    );

    setCount(result.data.length);
    let single = 0;
    result.data.map((price) => {
      let prices = parseFloat(price.productPrice);
      single = single + prices;
    });
    setTotal(single);
  }

  let token = async()=>{

    let val = localStorage.getItem('token')
    if(val){
      let result = await axios.get('http://localhost:3000/User/verify')
      let unique =  result.data[0].email.split('@')[0]
      setClientlog(unique)
      getCart(unique)
      setProfile(result.data[0]);
      setAuth((preAuth) => ({...preAuth,userId: unique} ))
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
        clientlog, setClientlog,
        pass,
        setPass,
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
        show, setShow,
        userLogin,
        auth,setAuth
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

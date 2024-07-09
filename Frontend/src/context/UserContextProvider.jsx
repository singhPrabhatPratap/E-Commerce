import React, { useState } from 'react'
import UserContext from './Usercontext.js'

export default function UserContextProvider({children}) {
    let [pass,setPass]= useState(false)
    let [clientlog,setClientlog]=useState('')
    let[count,setCount]=useState(0)
    let[total,setTotal]=useState(0)
    let[profile,setProfile]=useState({})
    let[cartcat,setCartcat]=useState('')
    // console.log(clientlog)
  return (
   <UserContext.Provider value={{pass,setPass,clientlog,setClientlog,count,setCount,total,setTotal,profile,setProfile,cartcat,setCartcat}}>
{children}
   </UserContext.Provider> 
  )
}

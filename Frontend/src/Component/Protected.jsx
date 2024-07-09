import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Usercontext from '../context/Usercontext'

export default function Protected({children}) {
  let { pass } = useContext(Usercontext)
  if(pass){
    return children
  }else{
   return <Navigate to='/admin/Adminlogin'/>
  }
}

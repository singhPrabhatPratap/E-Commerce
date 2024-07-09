import React from 'react'
import ClientNav from './Client/ClientNav'
import {  Outlet } from "react-router-dom"
import UserContextProvider from './context/UserContextProvider'

export default function ClientApp() {
  return (
    <UserContextProvider>
        <ClientNav/>
        <Outlet/>
    </UserContextProvider>
  )
}

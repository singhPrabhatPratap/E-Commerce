import React from 'react'
import ClientNav from './Client/ClientNav'
import {  Outlet } from "react-router-dom"
import UserContextProvider from './context/UserContextProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ClientApp() {
  return (
    <UserContextProvider>
        <ClientNav/>
        <Outlet/>
        <ToastContainer position="top-center" />
    </UserContextProvider>
  )
}

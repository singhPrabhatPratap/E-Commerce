import React from "react";
// https://github.com/singhPrabhatPratap/E-Commerce
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Admin from "./Component/Admin.jsx";
import View from "./Component/View.jsx";
import AddData from "./Component/AddData.jsx";
import Update from "./Component/Update.jsx";
import ClientApp from "./ClientApp.jsx";
import Homes from "./Client/Homes.jsx";
import AdminLogin from "./Component/AdminLogin.jsx";
import Protected from './Component/Protected.jsx'
import ClientSignUp  from "./Client/ClientSignup.jsx";
import ClientLogin from "./Client/ClientLogin.jsx";
import Cart from "./Client/Cart.jsx";
import Profile from "./Client/Profile.jsx";
import Cards from "./Client/Cards.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ClientApp />}>
        <Route path="" element={<Homes />} />
        <Route path="/clientsignup" element={<ClientSignUp/>}/>
        <Route path="/clientlogin" element={<ClientLogin/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/cards" element={<Cards/>}/>

      </Route>
      
      <Route path="/admin" element={<App />}>
        <Route path="" element={<Protected><Admin/></Protected>} />
        <Route path="/admin/Adminlogin" element={<AdminLogin />} />
        <Route path="/admin/viewData/:id" element={<View />} />
        <Route path="/admin/addData" element={<Protected><AddData /></Protected>} />
        <Route path="/admin/UpdateData/:id" element={<Update />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

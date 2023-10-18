/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';

import Addproducts from './components/pages/Addproducts';
import Error from './error/Error';
import Login from './login/Login';
import Register from './register/Register';
import Contact from './components/pages/Contact';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/addproducts",
        element: <Addproducts></Addproducts>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

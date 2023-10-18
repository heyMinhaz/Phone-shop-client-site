/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Phone from './components/pages/Phone';
import Addproducts from './components/pages/Addproducts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,

    children: [

      {

        path: "/",
        element:<Home></Home>,

      },
      {

        path: "/phone",
        element:<Phone></Phone>,

      },
      {

        path: "/addproducts",
        element:<Addproducts></Addproducts>,

      }


]

  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

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
import BrandData from './brandcard/BrandData';
import Authprovider from './provider/Authprovider';
import PrivateRoute from './routes/PrivateRoute';
import BrandDetails from './branddetails/BrandDetails';
import Update from './update/Update';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./fakeData.json"),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/addproducts",
        element: (
          <PrivateRoute>
            <Addproducts></Addproducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`https://server-site-sand.vercel.app/phones/${params.id}`),
      },
      {
        path: "/branddetails/:id",
        element: <BrandDetails></BrandDetails>,
        loader: ({ params }) => fetch(`https://server-site-sand.vercel.app/phones/${params.id}`),
      },
      {
        path: "/phones/_id",
        element: <BrandDetails></BrandDetails>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brand/:brandname",
        element: <BrandData></BrandData>,
        loader: ({ params }) => fetch(`https://server-site-sand.vercel.app/phones/`),
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './components/Login.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/home.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/Products",
      element: <div><h1>Products</h1></div>
    },
    {
      path: "/SingleProduct",
      element: <div><h1>SingleProduct</h1></div>
    },
    {
      path: "/A propos",
      element: <div><h1>A propos</h1></div>
    },
    {
      path: "/home",
      element: <Home/>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)

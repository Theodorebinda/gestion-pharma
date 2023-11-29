import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './pages/Login.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import About from './pages/About.jsx';
import Home from './pages/home.jsx';
import ProductsList from './pages/productList.jsx';
import Products from './components/Products.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/products",
      element: <ProductsList/>
    },
    {
      path: "/product/1",
      element: <SingleProduct />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/products",
      element: <Products />,
      children:[
        {
          path: "",
          element:<ProductsList />
        },
        {
          path:":id",
          element: <SingleProduct />
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)

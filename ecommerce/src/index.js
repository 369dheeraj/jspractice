import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import Product from './components/Product';
import UpdateProduct from './components/UpdateProduct'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:"/updateProduct",
        element: <UpdateProduct/>,
      },
      {
        path:"/product",
        element: <Product/>,
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


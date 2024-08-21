import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import Menu from './components/Menu'
import UpdateProduct from './components/UpdateProduct'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Layout/> */}
    <UpdateProduct/>
  </React.StrictMode>
);


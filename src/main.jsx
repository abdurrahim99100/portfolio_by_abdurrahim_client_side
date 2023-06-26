import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-2xl mx-auto bg-[#0C090A] text-white'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>,
)
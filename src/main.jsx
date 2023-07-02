import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='text-white bg-[#18172b]'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>,
)
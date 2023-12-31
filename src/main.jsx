import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router'

import { RouterProvider } from 'react-router-dom'
import { QuioscoProvider } from './context/QuioscoProvider';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuioscoProvider>
      <RouterProvider router={router} />
    </QuioscoProvider>
  </React.StrictMode>,
)

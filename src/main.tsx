import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { router } from './routes'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.body!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

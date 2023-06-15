import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Pages

import { path_routes } from './config.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: path_routes
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

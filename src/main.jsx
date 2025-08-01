import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Influences from './pages/Influences'
import Log from './pages/Log'
import Principles from './pages/Principles'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "influences",
        element: <Influences />,
        
      },
      {
        path: "log",
        element: <Log />,
      },
      {
        path: "principles",
        element: <Principles />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
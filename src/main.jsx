import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const router = createBrowserRouter([
  {
    
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element : <Home/>
      },
      {
        path: "/about",
        element : <About/>
      },
      {
        path: "/contact",
        element : <Contact/>
      }
    ]

  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import SignUp from './pages/SignUp.jsx'
import LogIn from './pages/LogIn.jsx'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to="/login" />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/login',
        element: <LogIn />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router}/>
)

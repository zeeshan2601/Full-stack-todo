import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'



import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

const Router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[{
      path:'',
      element: <Home/>
    },
    {
      path:'/about',
      element: <About/>
    }]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router}/>
)

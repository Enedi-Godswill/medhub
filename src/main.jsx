import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Contact from "./components/Contact.jsx"

const router = createBrowserRouter([
  {path:"/", element:<App />, errorElement:<div>404 Not Found</div> },
  {path:"/about", element:<About />, errorElement:<div>404 Not Found</div> },
  {path:"/login", element:<Login />, errorElement:<div>404 Not Found</div> },
  {path:"/Signup", element:<Signup />, errorElement:<div>404 Not Found</div> },
  {path:"/contact", element:<Contact />, errorElement:<div>404 Not Found</div>  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

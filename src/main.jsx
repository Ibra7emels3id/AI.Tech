import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider  } from 'react-router-dom';
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Projects from './Pages/Projects.jsx';
import Featurs from './Pages/Featurs.jsx';
import OurTeam from './Pages/OurTeam.jsx';
import Faqs from './Pages/Faqs.jsx';
import Testimonial from './Pages/Testimonial.jsx';
import Error404 from './Pages/Error-404.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error404/>
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/services",
    element: <Services/>,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/featurs",
    element: <Featurs />,
  },
  {
    path: "/ourteam",
    element: <OurTeam />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
  {
    path: "/testimonial",
    element: <Testimonial />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

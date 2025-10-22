import { StrictMode, } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './router/router.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
 AOS.init({
      duration: 500,  
      once: true,      
      startEvent: 'scroll' 
    });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-rubik max-w-7xl mx-auto'>
      <RouterProvider router={router} />,
    </div>
  </StrictMode>,
)

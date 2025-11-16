import { StrictMode, } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './router/router.jsx';
import { Toaster } from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthProvider from './assets/contexts/AuthContext/AuthProvider.jsx';
AOS.init({
  duration: 500,
  once: true,
  startEvent: 'scroll'
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-rubik  mx-auto'>
      <AuthProvider>
        <RouterProvider router={router} />
         <Toaster position="top-right" reverseOrder={false} />
      </AuthProvider>,
    </div>
  </StrictMode>,
)

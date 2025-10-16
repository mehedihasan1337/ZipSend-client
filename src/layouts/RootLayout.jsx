import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../pages/shared/Navber';
import Footer from '../pages/shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navber></Navber>
              <Outlet></Outlet>
              <Footer></Footer>
        </div>
    );
};

export default RootLayout;
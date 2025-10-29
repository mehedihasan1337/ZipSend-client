import React from 'react';
import logo from '../../assets/ZipSendLogo.png'
import { Link } from 'react-router';

const ZipSendLogo = () => {
    return (
       <Link to="/">
        <div>
            <img className='w-16' src={logo} alt="" />
        </div>
       </Link>
    );
};

export default ZipSendLogo; 
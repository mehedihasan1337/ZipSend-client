import React from 'react';
import { NavLink } from 'react-router';

const NavItems = () => {
    return (
        <div className='flex gap-5 list-none'>
            <li><NavLink to="/"> Home </NavLink> </li>
            <li><NavLink to="/about"> Services </NavLink> </li>
            <li><NavLink to="/about"> Coverage </NavLink> </li>
            <li><NavLink to="/about"> About Us </NavLink> </li>
            <li><NavLink to="/about"> Pricing </NavLink> </li>
            <li><NavLink to="/about"> Be a Rider </NavLink> </li>
        </div>
    );
};

export default NavItems;
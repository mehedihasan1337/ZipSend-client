import React from 'react';
import { Link, NavLink } from 'react-router';
import ZipSendLogo from './ZipSendLogo';
;

const Navber = () => {
  const navItems = <>

    <li><NavLink to="/"> Home </NavLink> </li>
    <li><NavLink to="/about"> Services </NavLink> </li>
    <li><NavLink to="/about"> Coverage </NavLink> </li>
    <li><NavLink to="/about"> About Us </NavLink> </li>
    <li><NavLink to="/about"> Pricing </NavLink> </li>
    <li><NavLink to="/about"> Be a Rider </NavLink> </li>
  </>
  return (
    <div className='my-7 '>
      <div className="navbar bg-white  shadow-sm shadow-[#a8dd08] hover:shadow-lg rounded-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div >
          <div>
            <ZipSendLogo ></ZipSendLogo>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
      <div className="navbar-end">
          <div className=' grid md:grid-cols-2 gap-3 '>
          <Link to="/login"><button className=" border-2 text-[#CAEB66] border-[#CAEB66] p-2 px-6 rounded-xl hover:text-black hover:bg-[#CAEB66] ">Sign In</button> </Link>
          <button className="btn shadow-none bg-[#CAEB66] border-none text-black rounded-xl">Be a rider</button>


        </div>
      </div>
      </div>
    </div>
  );
};

export default Navber;
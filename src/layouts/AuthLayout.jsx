import React from "react";
import { Outlet } from "react-router";
import AutImg from "../assets/authImage.png";
import ZipSendLogo from "../pages/shared/ZipSendLogo";

const AuthLayout = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - White (Form Section) */}
      <div className="relative w-full md:w-1/2 flex flex-col
      justify-center items-center bg-white p-8 md:p-10">
        {/* Top-left Logo (responsive) */}
        <div className="absolute top-6 left-6 md:top-8 md:left-10">
          <ZipSendLogo />
        </div>

        {/* Form Content */}
        <div className="w-full max-w-md mt-20 md:mt-10">
          <Outlet />
        </div>
      </div>

      {/* Right Side - Colored Background with Image */}
      <div className="w-full md:w-1/2 bg-[#d5fad8] flex justify-center items-center p-10">
        <img
          src={AutImg}
          alt="Auth Illustration"
          className="w-3/4 max-w-sm md:max-w-md"
        />
      </div>
    </div>
  );
};

export default AuthLayout;


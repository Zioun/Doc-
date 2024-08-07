import React from "react";

const Navbar = () => {
  return (
    <div className="bg-transparent flex justify-center sticky pt-3 md:pt-[20px] z-10">
      <div className="max-w-[1160px] m-auto w-full">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
              </ul>
            </div>
            <img className="w-[100px] md:w-[150px]" src="../../public/images/logo.png" alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-10 px-1">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="px-5 py-2 md:px-[28px] md:py-[14px] border rounded-2xl flex justify-center items-center gap-2">
              Appointment
              <span className="hidden md:block">
                <img src="../../public/images/Arrow-1.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

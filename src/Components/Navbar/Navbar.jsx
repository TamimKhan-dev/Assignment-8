import React from "react";
import { FaGithub } from "react-icons/fa";
import logoImg from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm  lg:px-14">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="flex gap-2 items-center justify-center text-xl cursor-pointer"><img className="w-10 h-10" src={logoImg} alt="Logo Image" /> <span className="font-semibold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">App Store</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Apps</a>
          </li>
          <li>
            <a>Installation</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn py-6 rounded-md bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-lg"><FaGithub style={{fontSize: '20px'}}/> Contribute</a>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Career", path: "/career" },
    { label: "News", path: "/news" },
  ];

  const menuLinks = links.map(({ label, path }) => (
    <li key={path}>
      <NavLink to={path}>{label}</NavLink>
    </li>
  ));

  return (
    <div className="navbar px-4 md:px-8 lg:px-12 xl:px-24 bg-base-100 font-medium">
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle bg-red-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <HiOutlineX /> : <FaBars />}
          </label>
          {isMenuOpen && (
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuLinks}
            </ul>
          )}
        </div>
      </div>
      <ul className="navbar-center hidden md:flex justify-start md:justify-center gap-5">
        {menuLinks}
      </ul>
      <div className="navbar-end flex gap-2 items-center">
        <FaUser className="bg-slate-400 w-10 h-10 p-2 rounded-full" />
        <button className="btn btn-primary normal-case">Login</button>
      </div>
    </div>
  );
};

export default Navbar;

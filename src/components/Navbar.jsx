import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Logo from "../assets/MainLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4  bg-white text-black ">
      <div>
        <img src={Logo} alt="Logo " style={{ width: "50px" }} />
      </div>

      <ul className="hidden md:flex">
        <li className="hover:text-[#076C05] transition-all ease-in-out duration-500">
          <Link to='/'>
          Home
          </Link>
        </li>
        <li className="hover:text-[#076C05] transition-all ease-in-out duration-500">
        <Link to='/about ' smooth={true} duration={500}>
          About Us
          </Link>
        </li>
        <li className="hover:text-[#076C05] transition-all ease-in-out duration-500">
        <Link to='/products' smooth={true} duration={500}>
          Products
          </Link>
        </li>
        <li className="hover:text-[#076C05] transition-all ease-in-out duration-500">
        <Link to='/contact' smooth={true} duration={500}>
          Contact Us
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-2xl hover:text-[#076C05] transition-all ease-in-out duration-500">
        <Link to='/'smooth={true} duration={500} >
          Home
          </Link>
        </li>
        <li className="py-6 text-2xl hover:text-[#076C05] transition-all ease-in-out duration-500">
        <Link to='/about ' smooth={true} duration={500}>
          About Us
          </Link>
        </li>
        <li className="py-6 text-2xl hover:text-[#076C05] transition-all ease-in-out duration-500">
        <Link to='/products' smooth={true} duration={500}>
          Products
          </Link>
        </li>
        <li className="py-6 text-2xl hover:text-[#076C05] transition-all ease-in-out duration-500">
        <Link to='/contact' smooth={true} duration={500}>
          Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

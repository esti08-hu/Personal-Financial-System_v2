"use client";
import "flowbite";
import Image from "next/image";
// import { Link } from 'react-router-dom';

// For smooth scrolling
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="navbar-container bg-[#00ABCD] w-full flex justify-center flex-col items-center fixed top-0 left-0 z-50">
      <nav className="bg-[#00ABCD] border-gray-200 h-20 w-2/3 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="flex items-center cursor-pointer space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/moneymaster.png"
              width={80}
              height={80}
              alt="Money Master Logo"
            />
            <p className="font-bold text-[#22577A]">MoneyMaster</p>
          </Link>

          <div className=" w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className=" cursor-pointer flex flex-col text-sm font-medium p-4 md:p-0 mt-4 border border-gray-100 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent text-white md justify-center items-center w-2/3">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3  hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#22577A] md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  HOME
                </Link>
              </li>

              <li>
                <Link
                  to="working-process"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3  hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#22577A] md:dark:hover:bg-transparent"
                >
                  PROCESS
                </Link>
              </li>

              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3  hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#22577A] md:dark:hover:bg-transparent"
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3  hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#22577A] md:dark:hover:bg-transparent"
                >
                  TESTIMONIAL
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <a href="/login">
              <button
                type="submit"
                className="text-gray-500 bg-white hover:bg-transparent hover:text-white  border-2 shadow-md px-4 py-2 rounded-md "
              >
                Sign In
              </button>
            </a>
            <a href="../signup">
              <button
                type="button"
                className="text-white border-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none rounded-md focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-5 py-2.5 text-center"
              >
                Sign Up
              </button>
            </a>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

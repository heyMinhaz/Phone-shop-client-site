/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="  flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5  dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between ">
          {/* Hamburger button for mobile view */}
          <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* Hamburger icon */}
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* Collapsible navigation container */}
          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
            {/* Logo */}
            <a
              className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
              href="#"
            >
              <NavLink to="/">
                {" "}
                <img
                  src="https://i.ibb.co/RcM12Ys/2b0c96bb864f56f97c2c649f8e5548bca9c31248-731x731-removebg-preview.png"
                  style={{
                    height: "45px",
                    width: "",
                  }}
                  alt="TE Logo"
                  loading="lazy"
                />
              </NavLink>
            </a>

            {/* Left navigation links */}
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                {/* Dashboard link */}
                <NavLink to="/">
                  {" "}
                  <a
                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:hover:text-neutral-600 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 font-bold"
                    data-te-nav-link-ref
                  >
                    Home
                  </a>
                </NavLink>
              </li>

              {/* Team link */}
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <NavLink to="/contact">
                  <a
                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:hover:text-neutral-600 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 font-bold"
                    data-te-nav-link-ref
                  >
                    Contact
                  </a>
                </NavLink>
              </li>

              {/* Projects link */}
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <NavLink to="/addproducts">
                  {" "}
                  <a
                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:hover:text-neutral-600 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 font-bold"
                    data-te-nav-link-ref
                  >
                    Add Products
                  </a>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right elements */}
          <div className="relative flex items-center">
            {/* Cart Icon */}
            <a className="mr-4 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-500 dark:hover:text-neutral-700 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
              <span className="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </span>
            </a>

            {/* Container with two dropdown menus */}
            <div
              className="relative"
              data-te-dropdown-ref
              data-te-dropdown-alignment="end"
            >
              {/* First dropdown trigger */}
              <a
                className="hidden-arrow mr-4 flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#"
                id="dropdownMenuButton1"
                role="button"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
              >
                {/* Dropdown trigger icon */}

                {/* Notification counter */}
                <span className="absolute -mt-4 ml-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">
                  1
                </span>
              </a>
              {/* First dropdown menu */}
              <ul
                className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton1"
                data-te-dropdown-menu-ref
              >
                {/* First dropdown menu items */}
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Phone
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Add Products
                  </a>
                </li>
              </ul>
            </div>

            {/* Second dropdown container */}
            <div
              className="relative"
              data-te-dropdown-ref
              data-te-dropdown-alignment="end"
            >
              {/* Second dropdown trigger */}
              <a
                className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none mr-3"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
              >
                {/* User avatar */}
                <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                  className="rounded-full mr-3"
                  style={{ height: "25px", width: "25px" }}
                  alt=""
                  loading="lazy"
                />{" "}
              <NavLink to="/login"> <button className="btn ">Login</button></NavLink> 
              </a>
              {/* Second dropdown menu */}
              <ul
                className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton2"
                data-te-dropdown-menu-ref
              >
                {/* Second dropdown menu items */}
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;

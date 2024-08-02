import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';

const navIteminfo = [
  { name: "Home", type: "link", href: "/home" },
  { name: "Filtration", type: "dropdown", items: [{ title: "Clay Vessel", href: "/Clayvessel" }, { title: "Cloth Filter", href: "/Clothfilter" }] },
  { name: "Games", type: "link", href: "/games" },
  { name: "Quizholder", type: "link", href: "/Quizholder" },
  { name: "Workshop", type: "link", href: "/workshop" },
];

const NavItem = ({ item }) => {
  const location = useLocation();  // Get the current location

  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => !curState);
  };

  const isActive = item.href === location.pathname;  // Check if the current path matches the item href

  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          {/* Changed 'a' to 'Link' and added conditional class for active link */}
          <Link to={item.href} className={`px-4 py-2 ${isActive ? 'text-blue-500' : 'hover:text-blue-500'}`}>
            {item.name}
          </Link>
          <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 py-2 flex gap-x-1 items-center hover:text-blue-500"
            onClick={toggleDropdownHandler}
          >
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page, index) => (
                // Changed 'a' to 'Link' and added conditional class for active link
                <Link
                  key={index}
                  to={page.href}
                  className={`hover:bg-dark-hard hover:text-blue-500 px-4 py-2 text-white lg:text-dark-soft ${page.href === location.pathname ? 'text-blue-500' : ''}`}
                >
                  {page.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const location = useLocation();  // Get the current location

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => !curState);
  };

  return (
    <section>
      <header className='container mx-auto px-5 flex justify-between items-center py-2'>
        <div>
          <img src='images/puredrops.png' alt="logo" className='w-32' />
        </div>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>

        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="flex gap-x-12 lg:text-dark-soft flex-col lg:flex-row font-semibold">
            {navIteminfo.map((item) => (
              <NavItem key={item.name} item={item} /> // Pass 'item' object
            ))}
          </ul>
          <button className='border-2 border-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'>
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;

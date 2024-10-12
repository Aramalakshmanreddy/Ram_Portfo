import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../UI/logo";
import "../Styles/navbar.css";
import { menuItems } from "../Utils/navbartext";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <>
      <nav className="flex justify-between items-center p-[20px]  bg-gradient-to-r from-green-300 to-sky-200 text-white shadow-lg">
        <Logo />

        <ul className="hidden lg:flex text-yellow-500 font-light lg:text-xl space-x-6">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-white ">
              <Link to={item.path} >{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center p-[10px] justify-around space-x-8">
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="text-yellow-500 text-2xl" />
              ) : (
                <FaBars className="text-yellow-500 text-2xl" />
              )}
            </button>
          </div>

          <input
            type="text"
            name="text"
            className="input lg:block hidden"
            placeholder="Search"
          />

          <div className="lg:hidden block">
            <button onClick={toggleSearch}>
              <FaSearch className="text-yellow-500 text-2xl" />
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed top-[70px] left-0 right-[60px] md:right-[190px] bottom-0 bg-black bg-opacity-75 z-50 flex justify-center items-center lg:hidden">
          <ul className="text-yellow-500 font-light text-xl space-y-6">
            {menuItems.map((item, index) => (
              <li key={index} className="hover:text-white">
                <Link to={item.path} onClick={toggleMenu}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isSearchOpen && (
        <div className="p-4 bg-gray-800">
          <input
            type="text"
            name="search"
            className="w-full p-2 rounded-md bg-gray-900 text-yellow-500"
            placeholder="Type to search..."
          />
        </div>
      )}
    </>
  );
}

export default Navbar;

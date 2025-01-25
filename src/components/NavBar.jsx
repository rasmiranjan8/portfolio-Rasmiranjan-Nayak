import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 shadow-md fixed top-0 left-0 w-full h-20 flex items-center z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Rasmiranjan Nayak</h1>

        {/* Mobile menu button */}
        <button className="text-white lg:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu items */}
        <ul
          className={`lg:flex ${
            isMenuOpen ? "flex" : "hidden"
          } absolute lg:static top-20 left-0 right-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 lg:bg-transparent lg:flex-row flex-col items-center space-y-4 lg:space-y-0 lg:space-x-6 p-4 lg:p-0`}
        >
          <li>
            <a href="#about" className="text-white hover:text-gray-100">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-gray-100">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="text-white hover:text-gray-100">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-100">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

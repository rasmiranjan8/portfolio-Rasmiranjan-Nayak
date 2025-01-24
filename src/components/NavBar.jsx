import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Rasmiranjan Nayak</h1>
        <ul className="flex space-x-6">
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

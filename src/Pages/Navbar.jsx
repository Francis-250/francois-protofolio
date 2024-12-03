import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className=" text-2xl font-bold">Francois</div>
        <div className="md:hidden">
          <button className="" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
        <ul className="hidden md:flex gap-10">
          <li>
            <Link to="/" className=" hover:font-bold text-lg ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className=" hover:font-bold text-lg ">
              About
            </Link>
          </li>
          <li>
            <Link to="/Contact" className=" hover:font-bold text-lg ">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* m menu */}

      {isMenuOpen ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50">
          <ul className="flex flex-col items-center justify-center h-full text-white md:hidden">
          <li className="py-2">
            <Link to="/" className=" hover:font-bold text-lg " onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link to="/About" className=" hover:font-bold text-lg" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="py-2">
            <Link to="/Contact" className=" hover:font-bold text-lg" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;

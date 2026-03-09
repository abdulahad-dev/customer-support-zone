import { useState } from 'react';
import { FaBars, FaPlus } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 lg:px-30">
      <div className="flex-1">
        <a className="lg:text-xl md:text-sm text-normal font-bold cursor-pointer">
          CS — Ticket System
        </a>
      </div>

      {/* Hamburger for mobile */}
      <div className="flex-none md:hidden">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Changelog</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Download</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex items-center gap-2">
              <FaPlus /> New Ticket
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-base-100 shadow-md md:hidden z-50">
          <ul className="menu p-4 gap-2">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a className="btn w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex justify-center">
                <FaPlus /> New Ticket
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

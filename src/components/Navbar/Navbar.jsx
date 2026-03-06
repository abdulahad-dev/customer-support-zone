import { FaPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-30">
      <div className="flex-1">
        <a className="text-xl font-bold cursor-pointer">CS — Ticket System</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="justify-center">
            <a>Home</a>
          </li>
          <li className="justify-center">
            <a>FAQ</a>
          </li>
          <li className="justify-center">
            <a>Changelog</a>
          </li>
          <li className="justify-center">
            <a>Blog</a>
          </li>
          <li className="justify-center">
            <a>Download</a>
          </li>
          <li className="justify-center">
            <a>Contact</a>
          </li>
          <li className="justify-center">
            <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
              <FaPlus /> New Ticket
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

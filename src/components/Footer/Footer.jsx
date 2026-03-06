import { FaCrop, FaFacebook, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <footer className="grid grid-cols-6 gap-4 footer sm:footer-horizontal py-18">
        <nav className="col-span-2">
          <h6 className="text-xl font-bold">CS — Ticket System</h6>
          <p className="text-gray-400 pt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Term & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="flex items-center gap-2 link link-hover">
            <FaCrop /> @CS — Ticket System
          </a>
          <a className="flex items-center gap-2 link link-hover">
            <FaLinkedin /> @CS — Ticket System
          </a>
          <a className="flex items-center gap-2 link link-hover">
            <FaFacebook /> @CS — Ticket System
          </a>
          <a className="flex items-center gap-2 link link-hover">
            <FaMailBulk /> <span>support@cst.com</span>
          </a>
        </nav>
      </footer>
      <footer className="footer footer-center border-t px-10 py-4">
        <p>© 2025 CS — Ticket System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;

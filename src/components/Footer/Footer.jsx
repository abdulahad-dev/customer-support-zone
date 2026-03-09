import { FaCrop, FaFacebook, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black text-white pt-10">
      <div className="max-w-7xl mx-auto">
        <footer className="footer sm:footer-horizontal text-neutral-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 py-10 px-6 md:px-6 lg:px-0">
          <div className="col-span-2">
            <h6 className="text-xl font-bold">CS — Ticket System</h6>
            <p className="text-gray-400 pt-4 text-sm">
              Our ticket system helps manage customer requests efficiently.
              Track, prioritize, and resolve issues quickly, ensuring smooth
              communication, faster responses, and improved satisfaction for
              both support teams and customers alike.
            </p>
          </div>

          {/* Company */}
          <div>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Our Mission</a>
            <a className="link link-hover">Contact Sales</a>
          </div>

          {/* Services */}
          <div>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Product & Services</a>
            <a className="link link-hover">Customer Stories</a>
            <a className="link link-hover">Download Apps</a>
          </div>

          {/* Information */}
          <div>
            <h6 className="footer-title">Information</h6>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Join Us</a>
          </div>

          {/* Social Links */}
          <div>
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
              <FaMailBulk /> support@cst.com
            </a>
          </div>
        </footer>

        <footer className="footer footer-center border-t py-4">
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

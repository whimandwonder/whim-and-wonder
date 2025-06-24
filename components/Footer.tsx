import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { ROUTE_PATHS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amazon-blue-light text-white mt-12">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Connect with Us */}
          <div>
            <h3 className="font-bold mb-4">Connect with Us</h3>
            <ul>
              <li className="mb-2"><Link to={ROUTE_PATHS.CONTACT_US} className="hover:text-amazon-yellow">Contact Us</Link></li>
              <li className="mb-2">
                <a href="mailto:connect.whimandwonder@gmail.com" className="hover:text-amazon-yellow">Email Us</a>
              </li>
              <li className="flex space-x-4 mt-4">
                <a href="https://www.instagram.com/whimsandwonder.co/" target="_blank" rel="noopener noreferrer" className="hover:text-amazon-yellow"><FaInstagram size={24} /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amazon-yellow"><FaFacebook size={24} /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-amazon-yellow"><FaTwitter size={24} /></a>
              </li>
            </ul>
          </div>

          {/* Column 2: Make Money with Us */}
          <div>
            <h3 className="font-bold mb-4">Make Money with Us</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-amazon-yellow">Sell on Whim & Wonder</a></li>
              <li className="mb-2"><a href="#" className="hover:text-amazon-yellow">Become an Affiliate</a></li>
            </ul>
          </div>

          {/* Column 3: Let Us Help You */}
          <div>
            <h3 className="font-bold mb-4">Let Us Help You</h3>
            <ul>
              <li className="mb-2"><Link to="/account" className="hover:text-amazon-yellow">Your Account</Link></li>
              <li className="mb-2"><Link to="/account/orders" className="hover:text-amazon-yellow">Your Orders</Link></li>
            </ul>
          </div>

          {/* Column 4: Policies */}
          <div>
            <h3 className="font-bold mb-4">Our Policies</h3>
            <ul>
              <li className="mb-2"><Link to="/privacy-policy" className="hover:text-amazon-yellow">Privacy Policy</Link></li>
              <li className="mb-2"><Link to="/refund-policy" className="hover:text-amazon-yellow">Refund Policy</Link></li>
              <li className="mb-2"><Link to="/shipping-policy" className="hover:text-amazon-yellow">Shipping Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-amazon-blue text-center py-4">
        <p>© {new Date().getFullYear()} Whim & Wonder. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
// src/pages/ContactUsPage.tsx

import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Added FaMapMarkerAlt

const ContactUsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">Get In Touch</h1>
        <p className="text-lg text-gray-600 mt-2">We'd love to hear from you! Reach out with any questions or comments.</p>
      </div>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-700">Contact Details</h2>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-3xl text-amazon-yellow" />
            <div>
              <h4 className="font-semibold text-gray-800">Email</h4>
              <a href="mailto:connect.whimandwonder@gmail.com" className="text-gray-600 hover:text-amazon-yellow hover:underline">
                connect.whimandwonder@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaWhatsapp className="text-3xl text-green-500" />
            <div>
              <h4 className="font-semibold text-gray-800">WhatsApp Business</h4>
              <a href="https://wa.me/919310125725" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500 hover:underline">
                +91 9310125725
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaInstagram className="text-3xl text-pink-500" />
            <div>
              <h4 className="font-semibold text-gray-800">Instagram</h4>
              <a href="https://www.instagram.com/whimsandwonder.co/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 hover:underline">
                @whimsandwonder.co
              </a>
            </div>
          </div>
          {/* --- NEW ADDRESS SECTION --- */}
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-3xl text-gray-500" />
            <div>
              <h4 className="font-semibold text-gray-800">Mailing Address</h4>
              <address className="text-gray-600 not-italic">
                Building/6, Ground Floor, Shastri Nagar<br/>
                North West Delhi, Delhi - 110052
              </address>
            </div>
          </div>
        </div>
        <div className="h-full bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Your awesome image or map here!</p>
        </div>
      </div>
    </div>
  );
};
export default ContactUsPage;
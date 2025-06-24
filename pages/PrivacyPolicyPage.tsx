// src/pages/PrivacyPolicyPage.tsx

import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4 prose max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      
      <p>At Whim and Wonder, your privacy is our top priority. This Privacy Policy explains how we collect, use, and protect your personal data.</p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">1. Information We Collect</h2>
      <p>
        <b>Personal Details:</b> Name, phone number, email address, billing/shipping address.
      </p>
      <p>
        <b>Payment Info:</b> We use secure third-party gateways. Your card or banking information is never stored by us.
      </p>
      <p>
        <b>Usage Data:</b> Includes IP address, browser type, device used, pages visited, etc.
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">2. How We Use Your Information</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>To process and deliver your orders.</li>
        <li>To send confirmations, updates, and respond to your queries.</li>
        <li>To enhance your shopping experience.</li>
        <li>For promotional updates (only if you opt in).</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">3. Sharing of Information</h2>
      <p>We do not sell or rent your personal information. It is only shared with trusted partners like delivery services and payment gateways to complete your order.</p>
      
      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">4. Cookies</h2>
      <p>Our website uses cookies for better performance and user experience. You can disable cookies through your browser settings.</p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">5. Data Security</h2>
      <p>We follow industry-standard safety measures to keep your data secure. However, no system is 100% secure online.</p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">6. Your Rights</h2>
      <p>You can contact us anytime to request changes or deletion of your personal information.</p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">7. Contact Us</h2>
      <p>Email: connect.whimandwonder@gmail.com</p>
      <p>Phone: +91 9310125725</p>
      <p>WhatsApp: +91 9310125725</p>
    </div>
  );
};

export default PrivacyPolicyPage;
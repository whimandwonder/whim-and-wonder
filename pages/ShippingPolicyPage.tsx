import React from 'react';

const ShippingPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4 prose max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Shipping Policy</h1>
      <p className="text-sm text-gray-500 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

      <p>Thank you for visiting and shopping at Whim and Wonder. Following are the terms and conditions that constitute our Shipping Policy.</p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">1. Shipment Processing Time</h2>
      <p>All orders are processed within 2-3 business days. Orders are not shipped or delivered on weekends or holidays.</p>
      <p>If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in shipment of your order, we will contact you via email or telephone.</p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">2. Shipping Rates & Delivery Estimates</h2>
      <p>Shipping charges for your order will be calculated and displayed at checkout.</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Standard Shipping:</strong> 5-7 business days. Cost: $4.99 (Free for orders over $50)
        </li>
        <li>
          <strong>Expedited Shipping:</strong> 2-3 business days. Cost: $12.99
        </li>
        <li>
          <strong>Overnight Shipping:</strong> 1-2 business days. Cost: $24.99 (Order must be placed before 1 PM EST)
        </li>
      </ul>
      <p>Delivery delays can occasionally occur.</p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">3. Shipment to P.O. Boxes or APO/FPO Addresses</h2>
      <p>Whim and Wonder ships to addresses within the U.S., U.S. Territories, and APO/FPO/DPO addresses.</p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">4. Shipment Confirmation & Order Tracking</h2>
      <p>You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.</p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">5. Customs, Duties and Taxes</h2>
      <p>Whim and Wonder is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).</p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">6. Damages</h2>
      <p>Whim and Wonder is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim.</p>
      <p>Please save all packaging materials and damaged goods before filing a claim.</p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">International Shipping Policy</h2>
      <p>We currently do not ship outside the U.S. We are working on expanding our shipping options in the future.</p>
      
      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">Contact Us</h2>
      <p>If you have any questions about this Shipping Policy, please contact us:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>By email: connect.whimandwonder@gmail.com</li>
        <li>By phone number: (+1) 555-0101</li>
      </ul>
    </div>
  );
};

export default ShippingPolicyPage;
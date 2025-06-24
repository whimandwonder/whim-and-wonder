import React from 'react';

const RefundPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4 prose max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Refund Policy</h1>
      <p className="text-sm text-gray-500 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

      <p>Thank you for shopping at Whim and Wonder. We appreciate the fact that you like to buy the cool stuff we build. We also want to make sure you have a rewarding experience while you’re exploring, evaluating, and purchasing our products.</p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">1. Standard Return Policy</h2>
      <p>We offer a 30-day return policy for most items. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.</p>
      <p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
      <p>Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases. Additionally, gift cards and some health and personal care items are non-returnable.</p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">2. Refunds (if applicable)</h2>
      <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
      <p>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days (typically 5-10 business days).</p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">3. Late or Missing Refunds (if applicable)</h2>
      <p>If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted. Next contact your bank. There is often some processing time before a refund is posted.</p>
      <p>If you’ve done all of this and you still have not received your refund yet, please contact us at connect.whimandwonder@gmail.com.</p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">4. Exchanges (if applicable)</h2>
      <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at connect.whimandwonder@gmail.com and send your item to: 123 Whimsy Lane, Wonder City, WN 45678, USA.</p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">5. Shipping Returns</h2>
      <p>To return your product, you should mail your product to: 123 Whimsy Lane, Wonder City, WN 45678, USA.</p>
      <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund (unless the item was defective or an error on our part).</p>
      <p>Depending on where you live, the time it may take for your exchanged product to reach you may vary.</p>
      <p>If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.</p>

      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-700">Contact Us</h2>
      <p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>By email: connect.whimandwonder@gmail.com</li>
        <li>By visiting this page on our website: <a href="/#/contact" className="text-amazon-link hover:underline">whimandwonder.com/contact</a></li>
        <li>By phone number: (+1) 555-0101</li>
      </ul>
    </div>
  );
};

export default RefundPolicyPage;
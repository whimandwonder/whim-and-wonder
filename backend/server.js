// backend/server.js - THE FINAL, COMPLETE VERSION

// 1. Import all the necessary packages
const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js'); // Import Supabase
require('dotenv').config();

// 2. Initialize the app and set up a port
const app = express();
const PORT = process.env.PORT || 5000;

// 3. Set up middleware
app.use(cors()); // Use simple CORS
app.use(express.json());

// 4. Initialize Razorpay with your API keys
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 5. Initialize Supabase Admin Client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// --- ENDPOINT 1: CREATE RAZORPAY ORDER ---
app.post('/create-order', async (req, res) => {
  try {
    const { amount } = req.body;
    const options = {
      amount: Math.round(amount * 100),
      currency: 'INR',
      receipt: `receipt_order_${new Date().getTime()}`,
    };
    const order = await razorpay.orders.create(options);
    if (!order) {
      return res.status(500).send('Error creating order');
    }
    res.json(order);
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).send('Internal Server Error');
  }
});

// --- THIS IS THE MISSING PART: ENDPOINT 2 TO SAVE THE ORDER ---
app.post('/save-order', async (req, res) => {
  try {
    const { orderDetails } = req.body;
    
    console.log("Attempting to save order to Supabase for user:", orderDetails.userId);

    const { data, error } = await supabase
      .from('orders')
      .insert([
        { 
          user_id: orderDetails.userId,
          order_id: orderDetails.orderId,
          razorpay_payment_id: orderDetails.razorpay_payment_id,
          total_amount: orderDetails.totalAmount,
          customer_info: orderDetails.customerInfo,
          shipping_address: orderDetails.shippingAddress,
          cart_items: orderDetails.cart,
        }
      ])
      .select();

    if (error) {
      throw error;
    }

    console.log('Order saved successfully in Supabase:', data);
    res.status(200).send({ success: true, order: data });

  } catch (error) {
    console.error('Error saving order to Supabase:', error);
    res.status(500).send({ success: false, message: 'Failed to save order.' });
  }
});

// 7. Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
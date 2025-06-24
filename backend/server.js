// 1. Import all the necessary packages
const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
require('dotenv').config(); // This loads the variables from .env

// 2. Initialize the app and set up a port
const app = express();
const PORT = process.env.PORT || 5000; // Use port from Render, or 5000 for local testing

// 3. Set up middleware
app.use(express.json()); // Allows our server to understand JSON data

// THIS IS THE UPDATED SECURITY PART
// It tells your backend to only accept requests from the URL you set in Render's environment variables.
app.use(cors({
  origin: process.env.FRONTEND_URL,
}));

// 4. Initialize Razorpay with your API keys from the .env file
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 5. Create our "Create Order" endpoint
app.post('/create-order', async (req, res) => {
  try {
    const { amount } = req.body;
    
    // Log the amount we receive from the frontend.
    console.log('------------------------------------');
    console.log('Amount received from frontend:', amount);

    const options = {
      amount: Math.round(amount * 100), // Ensure amount is an integer
      currency: 'INR',
      receipt: `receipt_order_${new Date().getTime()}`,
    };

    // Log the exact options we are about to send to Razorpay.
    console.log('Sending these options to Razorpay:', options);

    // Use Razorpay to create the order
    const order = await razorpay.orders.create(options);

    // Log the response we get back from Razorpay.
    console.log('Razorpay responded with this order:', order);
    console.log('------------------------------------');

    if (!order) {
      return res.status(500).send('Error creating order');
    }

    res.json(order);

  } catch (error) {
    // Log any errors that happen during the process.
    console.error('An error occurred:', error);
    res.status(500).send('Internal Server Error');
  }
});

// 6. Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
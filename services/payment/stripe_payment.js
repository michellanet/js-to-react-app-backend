"use strict";

// Libraries
const { Stripe } = require("stripe");

// Use Stripe secret key
const keySecret = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(keySecret);

// Stripe payment helper function
const paymentIntent = async (order_details, vendor_festivals) => {
  try {
    let total_amount_before_tax = 0;
    if (order_details.item.festival_price) {
      total_amount_before_tax = parseFloat(order_details.item.festival_price);
    } else if (order_details.item.product_price) {
      total_amount_before_tax = parseFloat(order_details.item.product_price);
    } else if (order_details.item.service_price) {
      total_amount_before_tax = parseFloat(order_details.item.service_price);
    } else if (order_details.item.experience_price) {
      total_amount_before_tax = parseFloat(order_details.item.experience_price);
    } else if (vendor_festivals) {
      total_amount_before_tax = parseFloat(
        vendor_festivals.length * order_details.item.price
      );
    } else {
      total_amount_before_tax = parseFloat(order_details.item.price);
    }

    const total_tax = Math.round(total_amount_before_tax * 13) / 100;
    const total_amount_after_tax = total_amount_before_tax + total_tax;
    const payment = await stripe.paymentIntents.create({
      amount: Math.round(total_amount_after_tax * 100),
      currency: "cad",
      description: order_details.item.description,
    });

    return {
      success: true,
      client_secret: payment.client_secret,
      paymentIntent_id: payment.id,
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
};

module.exports = {
  paymentIntent,
};

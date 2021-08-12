"use strict";

// Libraries
const router = require("express").Router();
const stripe_payment_service = require("../../services/payment/stripe_payment");
const authenticate_user_service = require("../../services/authentication/authenticate_user");
const user_profile_service = require("../../services/profile/user_profile");

// POST Stripe payment
router.post("/payment/stripe", async (req, res) => {
  if (!req.body.item_id || !req.body.item_type || !req.body.email) {
    return res.status(403).json({
      success: false,
      message: "Required parameters are not available in request.",
    });
  }

  try {
    const order_details = {
      item_id: req.body.item_id,
      item_type: req.body.item_type,
    };

    if (false) {
      return { success: false, message: "Invalid order details." };
    }

    let returning = await authenticate_user_service.checkEmail(req.body.email);

    if (!returning.success) {
      returning = await authenticate_user_service.createDummyUser(
        req.body.email
      );
    }

    const response = await stripe_payment_service.paymentIntent(
      db_order_details,
      req.body.vendor_festivals
    );

    return res.send(response);
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// POST successful Stripe payment
router.post("/payment/stripe/success", async (req, res) => {
  if (
    !req.body.item_id ||
    !req.body.item_type ||
    !req.body.payment_id ||
    !req.body.email
  ) {
    return res.status(403).json({
      success: false,
      message: "Required parameters are not available in request.",
    });
  }

  console.log("req.body from payment successful pruive:", req.body);

  try {
    return res.send([]);
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// POST Stripe payment in shopping cart
router.post("/payment/stripe/cart", async (req, res) => {
  if (!req.body.cartItems || !req.body.email) {
    return res.status(403).json({
      success: false,
      message: "Required parameters are not available in request.",
    });
  }

  try {
    let returning = await authenticate_user_service.checkEmail(req.body.email);

    if (!returning.success) {
      returning = await authenticate_user_service.createDummyUser(
        req.body.email
      );
    }

    let db_order_details = {
      item: {
        price: 1,
        description: "",
      },
    };

    const response = await stripe_payment_service.paymentIntent(
      db_order_details
    );

    return res.send(response);
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// POST successful Stripe payment in shopping cart
router.post("/payment/stripe/cart/success", async (req, res) => {
  if (
    !req.body.cartItems ||
    !req.body.payment_id ||
    (!req.body.email && !req.body.passport_id)
  ) {
    return res.status(403).json({
      success: false,
      message: "Required parameters are not available in request.",
    });
  }

  try {
    let db_user;

    if (req.body.passport_id) {
      db_user = await user_profile_service.getUserByPassportId(
        req.body.passport_id
      );
    } else {
      db_user = await authenticate_user_service.getUserByPassportId(
        req.body.email
      );
    }

    const order_details = {
      user_id: db_user.user.tasttlig_user_id,
      user_email: db_user.user.email,
      user_passport_id: db_user.user.passport_id,
      payment_id: req.body.payment_id,
      cartItems: req.body.cartItems,
    };
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;

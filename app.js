"use strict";

// Libraries
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const cron = require("node-cron");

// Set up dotenv
require("dotenv").config();
require("./db/db-config");

// Routes
const profile_router = require("./routes/user/profile");
const user_authentication_router = require("./routes/user/authentication");
const s3UploaderRouter = require("./routes/helper_routes/s3UploaderRoutes");
const payment_router = require("./routes/payment/payment");
const shopping_cart_router = require("./routes/shopping_cart/shopping_cart");

// Set up CORS
const app = express();
let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Set up Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "50mb" }));
app.use(logger("combined"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Use routes
app.use(user_authentication_router);
app.use(profile_router);
app.use(s3UploaderRouter);
app.use(payment_router);
app.use("/cart", shopping_cart_router);

// Boot development server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

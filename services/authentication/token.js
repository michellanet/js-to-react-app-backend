"use strict";

// Libraries
const { db } = require("../../db/db-config");
const jwt = require("jsonwebtoken");

// Store JWT helper function
const storeToken = async (refresh_token, user_id) => {
  try {
    const response = await db("refresh_tokens")
      .select()
      .where("user_id", user_id);

    if (response.length === 0) {
      try {
        await db("refresh_tokens").insert({
          refresh_token,
          user_id,
          created_at_datetime: new Date(),
          updated_at_datetime: new Date(),
        });
      } catch (error) {
        return { success: false, message: error.message };
      }
    } else {
      try {
        await db("refresh_tokens")
          .where("user_id", user_id)
          .update("refresh_token", refresh_token)
          .returning("*");
      } catch (error) {
        return { success: false, message: error.message };
      }
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Generate access token helper function
const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

// Generate refresh token helper function
const generateRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

// Authenticate JWT helper function
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) return res.status(403).send(error);
    req.user = user;
    next();
  });
};

/* Authenticate JWT coming from the client to update the password helper function */
const authForPassUpdate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  jwt.verify(token, process.env.EMAIL_SECRET, (error, user) => {
    if (error) return res.status(403).send(error);
    req.user = user;
    next();
  });
};

/* Check email token for experience review and food sample review helper 
function */
const verifyTokenForReview = (req, res, next) => {
  const token = req.body.token;
  const id = req.body.id;
  jwt.verify(token, process.env.EMAIL_SECRET, (error, details) => {
    if (error) return res.status(403).send(error);
    if (details.id != id) return res.status(403).send("Invalid token.");
    req.details = details;
    next();
  });
};

const auth = {
  storeToken,
  generateAccessToken,
  generateRefreshToken,
  authenticateToken,
  authForPassUpdate,
  verifyTokenForReview,
};

module.exports = auth;

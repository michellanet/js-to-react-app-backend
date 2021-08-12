"use strict";

// Libraries
const router = require("express").Router();
const token_service = require("../../services/authentication/token");
const authenticate_user_service = require("../../services/authentication/authenticate_user");
const user_profile_service = require("../../services/profile/user_profile");
const { generateRandomString } = require("../../functions/functions");

// POST user register
router.post(
  "/admin/add-user",
  token_service.authenticateToken,
  async (req, res) => {
    const { first_name, last_name, email, phone_number } = req.body;

    if (!req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access.",
      });
    }

    try {
      const adminUserObject = await user_profile_service.getUserByIdOrEmail(
        req.user.id
      );

      if (adminUserObject.success) {
        const adminUser = adminUserObject.user;
        const roles = adminUser.role;

        if (!roles.includes("ADMIN")) {
          return res.status(401).json({
            success: false,
            message: "Unauthorized access.",
          });
        }
      } else {
        return res.status(401).json({
          success: false,
          message: "Unauthorized access.",
        });
      }
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access.",
      });
    }

    if (!email) {
      return res.status(403).json({
        success: false,
        message: "Required parameters are not available in request.",
      });
    }

    try {
      const user = {
        first_name,
        last_name,
        email,
        password: generateRandomString(8),
        phone_number,
      };

      const response = await authenticate_user_service.userRegister(user, true);

      if (response.success) {
        res.status(200).send(response);
      } else {
        return res.status(401).json({
          success: false,
          message: "Email already exists.",
        });
      }
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: error.message,
      });
    }
  }
);

module.exports = router;

"use strict";

// Libraries
const authRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
const token_service = require("../../services/authentication/token");
const authenticate_user_service = require("../../services/authentication/authenticate_user");
const user_profile_service = require("../../services/profile/user_profile");
const auth_server_service = require("../../services/authentication/auth_server_service");

// Limit the number of accounts created from the same IP address
const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 1000, // start blocking after 10 requests
  message:
    "Too many accounts created from this IP. Please try again after an hour.",
});

// POST user register
authRouter.post("/user/register", createAccountLimiter, async (req, res) => {
  const { first_name, last_name, email, password, role } = req.body;

  if (!email || !password) {
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
      password,
      role,
    };

    const response = await authenticate_user_service.userRegister(user);

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
      message: "Email already exists.",
    });
  }
});

// GET user email address verification for registration
authRouter.get("/user/confirmation/:token", async (req, res) => {
  if (!req.params.token) {
    return res.status(403).json({
      success: false,
      message: "Required parameters are not available in request.",
    });
  }

  try {
    const user_id = jwt.verify(req.params.token, process.env.EMAIL_SECRET).user;
    const response = await authenticate_user_service.verifyAccount(user_id);
    res.send(response);
  } catch (error) {
    console.log("error", error);
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
});

// POST user login
authRouter.post("/user/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(403).json({
      success: false,
      message: "Required parameters are not available in request.",
    });
  }

  try {
    const { success, user } = await auth_server_service.authLogin(
      email,
      password
    );

    if (!success) {
      return res.status(401).json({
        success: false,
        message: "Invalid password.",
      });
    }

    let response = await user_profile_service.getUserByIdOrEmail(email);

    if (!response.success) {
      const new_user = {
        email: user.email,
        created_at_datetime: user.created_at,
        updated_at_datetime: user.updated_at,
        role: user.role,
      };

      await authenticate_user_service.userMigrationFromAuthServer(new_user);
    }

    response = await user_profile_service.getUserByIdOrEmail(email);

    const jwtUser = {
      ...response.user,
    };
    jwtUser.id = response.user.talent_user_id;
    const access_token = token_service.generateAccessToken(jwtUser);
    const refresh_token = token_service.generateRefreshToken(jwtUser);

    await token_service.storeToken(refresh_token, response.user.talent_user_id);

    return res.status(200).json({
      success: true,
      message: "Logged in.",
      user: jwtUser,
      tokens: {
        access_token,
        refresh_token,
      },
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Email/password combination is invalid.",
    });
  }
});

// DELETE user logout
authRouter.delete(
  "/user/logout",
  token_service.authenticateToken,
  async (req, res) => {
    try {
      if (!req.user || !req.user.id) {
        return res.status(403).json({
          success: false,
          message: "Required parameters are not available in request.",
        });
      }

      const returning = await authenticate_user_service.getUserLogOut(
        req.user.id
      );

      res.send({
        success: true,
        message: "Logged out.",
        response: returning,
      });
    } catch (error) {
      res.send({
        success: false,
        message: "Error.",
        response: error.message,
      });
    }
  }
);

// POST user forgot password
authRouter.post(
  "/user/forgot-password",
  createAccountLimiter,
  async (req, res) => {
    if (!req.body.email) {
      return res.status(403).json({
        success: false,
        message: "Required parameters are not available in request.",
      });
    }

    const returning = await authenticate_user_service.checkEmail(
      req.body.email
    );

    res.send(returning);
  }
);

// PUT user enter new password
authRouter.put("/user/update-password/:token", async (req, res) => {
  if (!req.body.email || !req.body.password || !req.params.token) {
    return res.status(403).json({
      success: false,
      message: "Required parameters are not available in request.",
    });
  }

  try {
    const email = req.body.email;
    const password = req.body.password;
    const token = req.params.token;

    if (email) {
      const response = await authenticate_user_service.updatePassword(
        email,
        password,
        token
      );

      res.send({
        success: true,
        message: "Success.",
        response,
      });
    }
  } catch (error) {
    if (error.message === "jwt expired") {
      res.send({
        success: false,
        message: "Error.",
        response: "Token is expired.",
      });
    } else {
      res.send({
        success: false,
        message: "Error.",
        response: error.message,
      });
    }
  }
});

// GET user by email
authRouter.get("/user/:user_email", async (req, res) => {
  try {
    const user = await user_profile_service.getUserByIdOrEmail(
      req.params.user_email
    );

    if (!user.success) {
      res.send({
        success: false,
        message: user.response,
      });
    }

    return res.send({
      success: true,
      message: "",
      response: user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error.",
      response: error.message,
    });
  }
});

module.exports = authRouter;

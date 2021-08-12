"use strict";

// Libraries
const { db } = require("../../db/db-config");
const jwt = require("jsonwebtoken");
const Mailer = require("../email/nodemailer").nodemailer_transporter;
const { generateRandomString } = require("../../functions/functions");
const auth_server_service = require("../../services/authentication/auth_server_service");

// Environment variables
const SITE_BASE = process.env.SITE_BASE;
const ADMIN_EMAIL = process.env.TASTTLIG_ADMIN_EMAIL;

// Save user register information to Tasttlig users table helper function
const userRegister = async (new_user, sendEmail = true) => {
  try {
    const { success, user } = await auth_server_service.authSignup(
      new_user.email,
      new_user.password
    );

    if (success) {
      //return { success, user };
      return db.transaction(async (trx) => {
        const userData = {
          first_name: new_user.first_name,
          last_name: new_user.last_name,
          email: new_user.email,
          created_at_datetime: new Date(),
          updated_at_datetime: new Date(),
        };

        let new_db_user = [];
        new_db_user = trx("talent_users").insert(userData).returning("*");
        return await new_db_user.then(async (value1) => {
          // Get role code of new role to be added
          db("roles")
            .select()
            .where({
              role: new_user.role,
            })
            .then(async (value) => {
              // Insert new role in auth server
              const { success, user2 } = await auth_server_service.authAddRole(
                user.id,
                value[0].role_code
              );
              console.log("1", value1);
              // Insert new role for this user
              await db("user_role_lookup").insert({
                user_id: value1[0].talent_user_id,
                role_code: value[0].role_code,
              });
            });

          // Send sign up email confirmation to the user
          /* if (sendEmail) {
            jwt.sign(
              {
                user: value1[0].talent_user_id,
              },
              process.env.EMAIL_SECRET,
              {
                expiresIn: "28d",
              },
              async (err, emailToken) => {
                const urlVerifyEmail = `${SITE_BASE}/user/verify/${emailToken}`;
                console.log("urlVerifyEmail", urlVerifyEmail);

                await Mailer.sendMail({
                  from: process.env.SES_DEFAULT_FROM,
                  to: new_user.email,
                  bcc: ADMIN_EMAIL,
                  subject: "[Tasttlig] Welcome to Tasttlig!",
                  template: "signup",
                  context: {
                     passport_id: new_db_user._single.insert.passport_id,
                    urlVerifyEmail, 
                  },
                });
              }
            );
          } */

          return { success: true, data: value1[0] };
        });
      });
    } else {
      return { success: false, data: "Error from auth server." };
    }
  } catch (error) {
    return { success: false, data: error.message };
  }
};

var d = new Date();
var year = d.getFullYear();
var month = d.getMonth();
var day = d.getDate();

// Verify user account helper function
const verifyAccount = async (user_id) => {
  return await db("talent_users")
    .where("talent_user_id", user_id)
    .update({
      is_email_verified: true,
      updated_at_datetime: new Date(),
    })
    .returning("*")
    .then((value) => {
      return {
        success: true,
        message: "Email is verified.",
        user_id: value[0].talent_user_id,
      };
    })
    .catch((reason) => {
      return { success: false, data: reason };
    });
};

// Logout user helper function
const getUserLogOut = async (user_id) => {
  return await db("refresh_tokens")
    .del()
    .where("user_id", user_id)
    .then((value) => {
      if (value === user_id) {
        return {
          success: true,
          message: "User logged out, refresh token deleted.",
        };
      }

      return { success: false, data: "Refresh token not found." };
    })
    .catch((reason) => {
      return { success: false, data: reason };
    });
};

// Password reset request from user helper function
const checkEmail = async (email) => {
  return await db("talent_users")
    .where({
      email,
    })
    .first()
    .then(async (value) => {
      if (!value) {
        return {
          success: false,
          message: "Error.",
          response: `There is no account for ${email}.`,
        };
      }

      const { email_token } =
        await auth_server_service.authPasswordResetRequest(email);

      try {
        const url = `${SITE_BASE}/forgot-password/${email_token}/${email}`;

        await Mailer.sendMail({
          from: process.env.SES_DEFAULT_FROM,
          to: email,
          subject: "[Tasttlig] Reset your password",
          template: "password_reset_request",
          context: {
            url,
          },
        });

        return {
          success: true,
          message: "Success.",
          response: `Your update password email has been sent to ${email}.`,
        };
      } catch (error) {
        return {
          success: false,
          message: "Error.",
          response: "Error in sending email.",
        };
      }
    })
    .catch((reason) => {
      return {
        success: false,
        message: "Error.",
        response: reason,
      };
    });
};

// Update password from user helper function
const updatePassword = async (email, password, token) => {
  const { success, user } = await auth_server_service.authPasswordReset(
    token,
    password
  );

  if (success) {
    await Mailer.sendMail({
      from: process.env.SES_DEFAULT_FROM,
      to: email,
      subject: "[Tasttlig] Password changed",
      template: "password_reset_success",
    })
      .then(() => {
        return { success: true, message: "Success." };
      })
      .catch((reason) => {
        return { success: false, message: reason };
      });
  } else {
    return { success: false, message: "JWT error." };
  }
};

/* Email to new user from multi-step form with login details and password reset 
link helper function */
const sendNewUserEmail = async (new_user) => {
  const email = new_user.email;
  const { email_token } = await auth_server_service.authPasswordResetRequest(
    email
  );

  try {
    const url = `${SITE_BASE}/forgot-password/${email_token}/${email}`;

    await Mailer.sendMail({
      from: process.env.SES_DEFAULT_FROM,
      to: email,
      subject: "[Tasttlig] Thank you for your application",
      template: "new_application_user_account",
      context: {
        first_name: new_user.first_name,
        last_name: new_user.last_name,
        email,
        password: new_user.password,
        url,
      },
    });

    return {
      success: true,
      message: "Success.",
      response: `Your update password email has been sent to ${email}.`,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error.",
      response: "Error in sending email.",
    };
  }
};

// Get user login information from auth server helper function
const userMigrationFromAuthServer = async (new_user) => {
  try {
    const userData = {
      first_name: "",
      last_name: "",
      email: new_user.email,
      phone_number: "",
      //role: new_user.role,
      //status: "ACTIVE",
      //passport_id: new_user.passport_id,
      //auth_user_id: new_user.auth_user_id,
      created_at_datetime: new_user.created_at_datetime,
      updated_at_datetime: new_user.updated_at_datetime,
    };
    const db_user = await db("talent_users").insert(userData).returning("*");

    await db("roles")
      .select()
      .where({
        role: new_user.role,
      })
      .then(async (value) => {
        // Insert new role in auth server
        /* const { success, user } = await auth_server_service.authAddRole(
          new_user.auth_user_id,
          value[0].role_code
        ); */

        // Insert new role for this user
        await db("user_role_lookup").insert({
          user_id: db_user[0].talent_user_id,
          role_code: value[0].role_code,
        });
      });

    // Insert new roles for this user
    new_user.roles.map(async (role) => {
      await db("user_role_lookup").insert({
        user_id: db_user[0].talent_user_id,
        role_code: role.role_code,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  userRegister,
  verifyAccount,
  getUserLogOut,
  checkEmail,
  sendNewUserEmail,
  updatePassword,
  userMigrationFromAuthServer,
};

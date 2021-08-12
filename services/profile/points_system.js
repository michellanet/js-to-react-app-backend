"use strict";

// Libraries
const { db } = require("../../db/db-config");
const auth_server_service = require("../authentication/auth_server_service");
const user_profile_service = require("../profile/user_profile");

// Get user points helper function
const getUserPoints = async (user_id) => {
  return db("points_history")
    .select(db.raw("SUM(points)"))
    .where("user_id", user_id)
    .then((value) => {
      return { success: true, data: value };
    })
    .catch((reason) => {
      return { success: false, data: reason };
    });
};

// Add user points helper function
const addUserPoints = async (user_id, points) => {
  const db_user = await user_profile_service.getUserByIdOrEmail(user_id);

  await auth_server_service.authAddPoints(db_user.user.auth_user_id, points);

  return db("points_history")
    .insert({
      user_id: user_id,
      points: points,
      status: "ACTIVE",
      created_at: new Date(),
      updated_at: new Date(),
    })
    .returning("*")
    .then((value) => {
      return { success: true, data: value };
    })
    .catch((reason) => {
      return { success: false, data: reason };
    });
};

module.exports = {
  getUserPoints,
  addUserPoints,
};

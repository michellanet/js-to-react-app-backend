"use strict";

// Libraries
const { db } = require("../../db/db-config");

// Get shopping cart helper function
const getCart = async (user_id) => {
  return await db("carts")
    .where("carts.user_id", user_id)
    .leftJoin("cart_items", "carts.cart_id", "cart_items.cart_id")
    .then((value) => {
      return { success: true, nationalities: value };
    })
    .catch((error) => {
      return { success: false, details: error };
    });
};

// Create shopping cart helper function
const createCart = async (user_id) => {
  return await db("carts")
    .insert({
      user_id,
      status: "SUCCESS",
      created_at: new Date(),
      updated_at: new Date(),
    })
    .returning("*")
    .then((cart) => {
      return { success: true, details: cart };
    })
    .catch((error) => {
      return { success: false, details: error };
    });
};

// Add item to shopping cart helper function
const addCartItem = async (cart_id, item_type, item_id, quantity) => {
  return await db("cart_items")
    .insert({
      cart_id,
      status: "SUCCESS",
      item_type,
      item_id,
      quantity,
      created_at: new Date(),
      updated_at: new Date(),
    })
    .then(() => {
      return { success: true };
    })
    .catch((error) => {
      return { success: false, details: error };
    });
};

// Update shopping cart helper function
const updateCart = async (cart_id, item_type, item_id, quantity) => {
  return await db("cart_items")
    .where({
      cart_id,
      experience_creator_user_id: db_user.tasttlig_user_id,
    })
    .update(experience_update_data)
    .then(() => {
      return { success: true };
    })
    .catch((reason) => {
      return { success: false, details: reason };
    });
};

module.exports = {
  getCart,
  createCart,
  addCartItem,
  updateCart,
};

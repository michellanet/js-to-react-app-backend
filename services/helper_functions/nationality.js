"use strict";

// Libraries
const { db } = require("../../db/db-config");

// Get all nationalities helper function
const getAll = async () => {
  return await db
    .select("*")
    .from("nationalities")
    .then((value) => {
      return { success: true, nationalities: value };
    })
    .catch((reason) => {
      return { success: false, details: reason };
    });
};

module.exports = {
  getAll,
};

const { generateRandomString } = require("../../functions/functions");

exports.up = function (knex) {
  return knex.schema.createTable("roles", (table) => {
    table.increments("role_id").unsigned().primary();
    table.string("role").notNullable();
    table.string("role_code").notNullable().unique().index();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("roles");
};

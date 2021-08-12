const { generateRandomString } = require("../../functions/functions");

exports.up = function (knex) {
  return knex.schema.createTable("references", (table) => {
    table.increments("reference_id").unsigned().primary();
    table
      .integer("user_skill_id")
      .notNullable()
      .references("user_skill_id")
      .inTable("user_skillset")
      .onDelete("CASCADE");
    table
      .integer("user_id")
      .notNullable()
      .references("talent_user_id")
      .inTable("talent_users")
      .onDelete("CASCADE");
    table.string("reference_email");
    table.string("reference_phone_number");
    table.string("reference_first_name");
    table.string("reference_last_name");
    table.string("reference_organization");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("references");
};

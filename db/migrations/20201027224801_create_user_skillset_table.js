const { generateRandomString } = require("../../functions/functions");

exports.up = function (knex) {
  return knex.schema.createTable("user_skillset", (table) => {
    table.increments("user_skill_id").unsigned().primary();
    table.string("skill_title");
    table.string("skill_category");
    table
      .integer("user_id")
      .notNullable()
      .references("talent_user_id")
      .inTable("talent_users")
      .onDelete("CASCADE");
    table.text("skill_summary");
    table.decimal("skill_price");
    table.integer("skill_experience");
    table.string("image_link");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user_skillset");
};

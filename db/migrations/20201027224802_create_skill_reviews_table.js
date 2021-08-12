const { generateRandomString } = require("../../functions/functions");

exports.up = function (knex) {
  return knex.schema.createTable("skill_reviews", (table) => {
    table.increments("skill_review_id").unsigned().primary();
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
    table.text("review_comment");
    table.integer("review_rating");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("skill_reviews");
};

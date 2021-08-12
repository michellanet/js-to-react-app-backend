exports.up = function (knex) {
  return knex.schema.createTable("talent_users", (table) => {
    table.increments("talent_user_id").unsigned().primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").unique().notNullable();
    table.string("phone_number");
    table.string("profile_image_link");
    table.string("facebook_link");
    table.string("youtube_link");
    table.string("twitter_link");
    table.string("instagram_link");
    table.string("linkedin_link");
    table.string("website_link");
    table.string("resume_link");
    table.string("portfolio_link");
    table.string("skillset");
    table.string("reviews");
    table.string("references");
    table.dateTime("created_at_datetime").notNullable();
    table.dateTime("updated_at_datetime").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("talent_users");
};

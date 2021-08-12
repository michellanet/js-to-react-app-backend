exports.up = function (knex) {
  return knex.schema.createTable("client_details", (table) => {
    table.increments("client_id").unsigned().primary();
    table
      .integer("user_id")
      .unsigned()
      .index()
      .references("talent_user_id")
      .inTable("talent_users");
    table.string("client_city");
    table.string("client_state");
    table.string("client_country");
    table.string("client_postal_code");
    table.string("client_phone_number");
    table.string("client_logo_link");
    table.string("client_description");
    table.string("client_business_name");
    table.string("client_street_number");
    table.string("client_street_name");
    table.string("client_business_unit");
    table.dateTime("client_registration_date").notNullable();
    table.dateTime("client_date_updated");
    table.boolean("is_client_business_registered");
    table.string("client_business_registered_location");
    table.string("business_passport_id");
    table.string("business_type");
    table.string("business_preference");
    table.string("business_member_status");
    table.boolean("is_business_retail");
    table.string("food_business_type");
    table.string("food_handler_certificate");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("client_details");
};

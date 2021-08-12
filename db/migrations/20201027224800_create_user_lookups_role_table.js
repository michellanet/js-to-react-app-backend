exports.up = function (knex) {
  return knex.schema
    .createTable("user_role_lookup", (table) => {
      table.increments("user_role_lookup_id").unsigned().primary();
      table
        .integer("user_id")
        .notNullable()
        .index()
        .references("talent_user_id")
        .inTable("talent_users");
      table
        .string("role_code")
        .notNullable()
        .references("role_code")
        .inTable("roles");
    })
    .then(() => {
      let new_user_role_lookups = [];
      return knex("roles")
        .select()
        .then((db_roles) => {
          return knex("talent_users")
            .select("talent_user_id")
            .then((db_users) => {
              db_users.map((db_user) => {
                let role_list = db_user.role.split(",");
                role_list.map((role) => {
                  db_roles.some((db_role) => {
                    if (db_role.role == role) {
                      new_user_role_lookups.push({
                        user_id: db_user.talent_user_id,
                        role_code: db_role.role_code,
                      });
                      return true;
                    }
                  });
                });
              });
              return knex("user_role_lookup").insert(new_user_role_lookups);
            });
        });
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user_role_lookup");
};

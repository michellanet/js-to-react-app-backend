const {nationalities} = require("../data/nationality");

exports.up = function (knex) {
    return knex.schema.createTable("nationalities", table => {
        table.increments("id").unsigned().primary();
        table.string("nationality").notNullable();
        table.string("country").notNullable();
        table.string("continent").notNullable();
        table.string("num_code");
        table.string("alpha_2_code");
        table.string("alpha_3_code");
    }).then(() => {
        return knex("nationalities").insert(nationalities.map((n) => {
            return {
                nationality: n.nationality,
                country: n.en_short_name,
                continent: n.continent,
                num_code: n.num_code,
                alpha_2_code: n.alpha_2_code,
                alpha_3_code: n.alpha_3_code,
            }
        }));
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable("nationalities");
};

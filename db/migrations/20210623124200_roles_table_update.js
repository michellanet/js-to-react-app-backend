exports.up = function (knex) {
  return knex("roles").insert([
    {
      role: "client",
      role_code: "CLIENT",
    },
    {
      role: "talent",
      role_code: "TALENT",
    },
  ]);
};

exports.down = function (knex) {
  const new_role_code = ["CLIENT", "TALENT"];
  return knex("roles")
    .whereIn("role_code", new_role_code)
    .del()
    .then(() => {
      return knex("roles").whereIn("role_code", new_role_code).del();
    });
};

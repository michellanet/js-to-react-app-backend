const environment = process.env.NODE_ENV;
const config = require("../knexfile")[environment];
const knexPostgis = require("knex-postgis");
const { Model } = require("objection");

const db = require("knex")(config);
const { attachPaginate } = require("knex-paginate");
attachPaginate();
const gis = knexPostgis(db);
Model.knex(db);

db.migrate.latest();

module.exports = {
  db,
  gis,
};

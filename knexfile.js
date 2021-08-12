module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "talent_back_node_development",
    },
    migrations: {
      directory: "./db/migrations",
    },
    useNullAsDefault: true,
  },

  staging: {
    client: "pg",
    connection: {
      database: "talent_back_node_staging",
    },
    migrations: {
      directory: "./db/migrations",
    },
    useNullAsDefault: true,
  },

  production: {
    client: "pg",
    connection: {
      host: process.env.DB_HOSTNAME,
      database: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    },
    migrations: {
      directory: "./db/migrations",
    },
    useNullAsDefault: true,
  },

  test: {
    client: "sqlite3",
    connection: ":memory:",
    useNullAsDefault: true,
    migrations: {
      directory: "./db/migrations",
    },
  },
};

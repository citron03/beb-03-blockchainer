require("dotenv").config();
const env = process.env;

const development = {
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  host: "127.0.0.1",
  dialect: "mysql",
};
const test = {
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  host: "127.0.0.1",
  dialect: "mysql",
};
const production = {
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  host: "127.0.0.1",
  dialect: "mysql",
};

module.exports = { development, production, test };

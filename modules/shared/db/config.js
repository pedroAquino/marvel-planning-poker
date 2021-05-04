
require('dotenv').config();
const mysql2 = require('mysql2');

const config = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dialect: "mysql",
  dialectModule: mysql2,
  pool: {
    max: 5,
    min: 0,
    acquire: 20000,
    idle: 10000
  },
};

module.exports = {
  development: config,
  test: config,
  production: config,
  preview: config,
};

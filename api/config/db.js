const Sequelize = require("sequelize");
const db = new Sequelize("maxmovie", "postgres", "1980", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;

const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodejs-tutorial", "root", "A123", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;

const Sequelize = require("sequelize");

const sequelize = require("../util/sqlDB");
const Model = Sequelize.Model;
class User extends Model {}
User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING
  },
  {
    sequelize,
    modelName: "user"
    // options
  }
);

module.exports = User;

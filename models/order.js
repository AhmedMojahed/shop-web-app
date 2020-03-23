const Sequelize = require("sequelize");
const sequelize = require("../util/sqlDB");

const Model = Sequelize.Model;
class Order extends Model {}
Order.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    quantity: Sequelize.INTEGER
  },
  {
    sequelize,
    modelName: "order"
  }
);
module.exports = Order;

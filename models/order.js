const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [
    {
      product: {
        type: Object,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  user: {
    name: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  }
});

// const Sequelize = require("sequelize");
// const sequelize = require("../util/sqlDB");

// const Model = Sequelize.Model;
// class Order extends Model {}
// Order.init(
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true
//     },
//     quantity: Sequelize.INTEGER
//   },
//   {
//     sequelize,
//     modelName: "order"
//   }
// );
module.exports = mongoose.model("Order", orderSchema);
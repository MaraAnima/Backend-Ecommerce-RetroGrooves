const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        buyer: {
          type: DataTypes.STRING,
        },
        orderRegistration: {
          type: DataTypes.JSON,
        },
        orderState: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "order", // Nombre del modelo en singular y en minúscula.
      },
    );

    return Order;
  }
}

module.exports = { Order };

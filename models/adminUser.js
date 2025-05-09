const { Model, DataTypes } = require("sequelize");

class AdminUser extends Model {
  static initModel(sequelize) {
    AdminUser.init(
      {
        name: {
          type: DataTypes.STRING,
        },
        lastname: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        address: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "adminUser", // Nombre del modelo en singular y en minúscula.
      },
    );
    return AdminUser;
  }
}

module.exports = AdminUser;

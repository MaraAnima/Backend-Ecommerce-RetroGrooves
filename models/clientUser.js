const { Model, DataTypes } = require("sequelize");

class ClientUser extends Model {
  static initModel(sequelize) {
    ClientUser.init(
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

        phone: {
          type: DataTypes.STRING,
        },

        order: {
          type: DataTypes.STRING,
        },

        password: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "clientuser", // Nombre del modelo en singular y en minúscula.
      },
    );

    return ClientUser;
  }
}

module.exports = { ClientUser };

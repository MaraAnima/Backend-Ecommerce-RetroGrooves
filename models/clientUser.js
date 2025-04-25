const { Model, DataTypes } = require("sequelize");
const { DataTypes } = require("./index");

class ClientUser extends Model {
  static initModel(sequelize) {
    ClientUser.init(
      {
        name: DataTypes.STRING,

        lastname: DataTypes.STRING,

        email: DataTypes.STRING,

        adress: DataTypes.STRING,

        phone: DataTypes.STRING,

        order: DataTypes.STRING,

        password: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "clientUser", // Nombre del modelo en singular y en minúscula.
      },
    );

    return ClientUser;
  }
}

module.exports = { ClientUser };

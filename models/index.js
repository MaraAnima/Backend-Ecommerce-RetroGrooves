const { Sequelize, Model, DataTypes } = require("sequelize");
const { ClientUser } = require("./clientUser");
const { AdminUser } = require("./adminUser");
const { Order } = require("./order");
const { Product } = require("./product");
const { Category } = require("./category");

const sequelize = new Sequelize(
  "proyect-ecommerce", // Ej: hack_academy_db
  "root", // Ej: root
  "root", // Ej: root
  {
    host: "127.0.0.1", // Ej: 127.0.0.1
    dialect: "mysql", // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

// Requerir todos los modelos:
/*const User = require("./User");
const Article = require("./Article");*/

// Inicializar todos los modelos:
ClientUser.initModel(sequelize);
AdminUser.initModel(sequelize);
Order.initModel(sequelize);
Product.initModel(sequelize);
Category.initModel(sequelize);
/*
 * Luego de definir los modelos, se pueden establecer relaciones entre los
 * mismos (usando métodos como belongsTo, hasMany y belongsToMany)...
 *
 * Por ejemplo, si un User está relacionado con un Article, establecerlo
 * aquí abajo.
 */
ClientUser.hasMany(Order);
Order.belongsTo(ClientUser);

Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = { sequelize, ClientUser, Model, DataTypes, Order, Product, Category, AdminUser };

const { Sequelize } = require("sequelize");
const ClientUser = require("./clientUser");
const AdminUser = require("./adminUser");
const Order = require("./order");
const Product = require("./product");
const Category = require("./category");

const conection = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

// Requerir todos los modelos:
/*const User = require("./User");
const Article = require("./Article");*/

// Inicializar todos los modelos:
ClientUser.initModel(conection);
AdminUser.initModel(conection);
Order.initModel(conection);
Product.initModel(conection);
Category.initModel(conection);
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

module.exports = { conection, ClientUser, Order, Product, Category, AdminUser };

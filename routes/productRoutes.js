const express = require("express");
const routerProduct = express.Router();
const Product = require("../controllers/productController");

/*
 * API endpoints relacionados a los usuarios.
 *
 * Notar que todos estos endpoints tienen como prefijo el string "/users",
 * tal como se definió en el archivo `routes/index.js`.
 */

routerProduct.get("/", Product.index);
routerProduct.post("/", Product.store);
routerProduct.get("/:id", Product.show);
routerProduct.patch("/:id", Product.update);
routerProduct.delete("/:id", Product.destroy);

module.exports = routerProduct;

const express = require("express");
const categoryRoutes = express.Router();
const Category = require("../controllers/categoryController");

/*
 * API endpoints relacionados a los usuarios.
 *
 * Notar que todos estos endpoints tienen como prefijo el string "/users",
 * tal como se definió en el archivo `routes/index.js`.
 */

categoryRoutes.get("/", Category.index);
categoryRoutes.post("/", Category.store);
categoryRoutes.get("/:id", Category.show);
categoryRoutes.patch("/:id", Category.update);
categoryRoutes.delete("/:id", Category.destroy);

module.exports = categoryRoutes;

const express = require("express");
const clientRoutes = express.Router();
const userClientController = require("../controllers/userClientController");

/*
 * API endpoints relacionados a los artículos.
 *
 * Notar que todos estos endpoints tienen como prefijo el string "/articles",
 * tal como se definió en el archivo `routes/index.js`.
 */

clientRoutes.get("/", userClientController.index);
clientRoutes.post("/", userClientController.store);
clientRoutes.get("/:id", userClientController.show);
clientRoutes.patch("/:id", userClientController.update);
clientRoutes.delete("/:id", userClientController.destroy);

module.exports = clientRoutes;

const express = require("express");
const clientRoutes = express.Router();
const userClientController = require("../controllers/userClientController");
const { expressjwt: checkJwt } = require("express-jwt");

/*
 * API endpoints relacionados a los artículos.
 *
 * Notar que todos estos endpoints tienen como prefijo el string "/articles",
 * tal como se definió en el archivo `routes/index.js`.
 */

clientRoutes.get(
  "/",
  checkJwt({ secret: "UnStringSecreto", algorithms: ["HS256"] }),
  userClientController.index,
);
clientRoutes.post("/", userClientController.store);
clientRoutes.get(
  "/:id",
  checkJwt({ secret: "UnStringSecreto", algorithms: ["HS256"] }),
  userClientController.show,
);
clientRoutes.patch(
  "/:id",
  checkJwt({ secret: "UnStringSecreto", algorithms: ["HS256"] }),
  userClientController.update,
);
clientRoutes.delete(
  "/:id",
  checkJwt({ secret: "UnStringSecreto", algorithms: ["HS256"] }),
  userClientController.destroy,
);

module.exports = clientRoutes;

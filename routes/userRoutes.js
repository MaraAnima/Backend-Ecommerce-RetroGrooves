const express = require("express");
const router = express.Router();
const userClientController = require("../controllers/userClientController");

/*
 * API endpoints relacionados a los usuarios.
 *
 * Notar que todos estos endpoints tienen como prefijo el string "/users",
 * tal como se definió en el archivo `routes/index.js`.
 */

router.get("/", userClientController.index);
router.post("/", userClientController.store);
router.get("/:id", userClientController.show);
router.patch("/:id", userClientController.update);
router.delete("/:id", userClientController.destroy);

module.exports = router;

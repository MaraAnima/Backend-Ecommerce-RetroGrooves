const express = require("express");
const orderRoutes = express.Router();
const Order = require("../controllers/orderController");
const { expressjwt: checkJwt } = require("express-jwt");
const isAdmin = require("../middleweres/isAdmin");

orderRoutes.get("/", Order.index);
orderRoutes.post("/", Order.store);
orderRoutes.get("/:id", Order.show);
orderRoutes.patch(
  "/:id",
  checkJwt({ secret: "UnStringSecreto", algorithms: ["HS256"] }),
  isAdmin,
  Order.update,
);
orderRoutes.delete("/:id", Order.destroy);

module.exports = orderRoutes;

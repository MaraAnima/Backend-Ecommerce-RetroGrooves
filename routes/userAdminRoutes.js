const express = require("express");
const adminRoutes = express.Router();
const AdminUser = require("../controllers/userAdminController");

/*
 * En general, para cada recurso (o entidad) de la API REST se tienen estos
 * 5 endpoints, que corresponden al CRUD estándar (Create-Read-Update-Delete).
 
 * Notar que todos los endpoints de este archivo tienen como prefijo el string
 * defindo en el archivo `routes/index.js`. Es decir, en este ejemplo, todos
 * los endpoints de este archivo tienen como prefijo el string "/examples".
 *
 * En caso de necesitarlo, se pueden agregar, modificar o eliminar endpoints,
 * pero es importante tener mucho cuidado con no inventar URLs raras
 * como "/agregar-usuario" o "/delete-article". En lo posible, se deben
 * respetar las convenciones REST.
 */

adminRoutes.get("/", AdminUser.index);
adminRoutes.post("/", AdminUser.store);
adminRoutes.get("/:id", AdminUser.show);
adminRoutes.patch("/:id", AdminUser.update);
adminRoutes.delete("/:id", AdminUser.destroy);

module.exports = adminRoutes;

/*
 * Este archivo se puede usar como referencia para crear el controlador de
 * cualquier entidad del sistema.
 *
 * Por ejemplo, si se necesita crear un controlador para la entidad `Student`,
 * se sugiere hacer Copy & Paste de este archivo y nombrarlo como
 * `studentController.js`.
 *
 * No es necesario renombrar los métodos. A priori, la idea es que todos los
 * controladores tengan estos 5 métodos: index, show, store, update y destroy.
 *
 */

// Display a listing of the resource.
const { Order } = require("../models/index");
const authController = require("../controllers/authController");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function index(req, res) {
  try {
    const resultOrder = await Order.findAll();
    return res.json(resultOrder);
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const orderById = await Order.findByPk(req.params.id);
    if (orderById) {
      res.json(orderById);
    } else {
      res.status(404).json({ error: "No se encontró la orden" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const { orderRegistration, orderState } = req.body;
    const idUser = req.auth.sub;
    console.log(idUser);
    if (!orderRegistration || !orderState) {
      return res.json({ error: "Todas las propiedades son requeridas obligatoriamente" });
    }

    const newOrder = await Order.create({ clientuserId: idUser, orderRegistration, orderState });
    return res.json(newOrder);
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const updateOrder = await Order.findByPk(req.params.id);
    await updateOrder.update({
      orderRegistration: req.body.orderRegistration,
      orderState: req.body.orderState,
    });
    res.json(updateOrder);
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await Order.destroy({ where: { id: req.params.id } });
    res.send("Se ha eliminado exitosamente");
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};

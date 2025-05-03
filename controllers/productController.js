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
const { Product } = require("../models/index");

async function index(req, res) {
  try {
    const result = await Product.findAll();
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

/* Display the specified resource.
async function show(req, res) {
  try {
    const productByid = await Product.findByPk(req.params.id);
    if (productByid) {
      res.json(productByid);
    } else {
      res.status(404).json({ error: "No se encontró el producto" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}*/

// Store a newly created resource in storage.
async function store(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};

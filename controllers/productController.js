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
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const { name, description, photo, stock, price } = req.body;
    if (!name || !description || !photo || !stock || !price) {
      return res.json({ error: "Todas las propiedades son requeridas obligatoriamente" });
    }

    const newProduct = await Product.create({ name, description, photo, stock, price });
    return res.json(newProduct);
  } catch (error) {
    console.error("Error real:", error.message, error); // <- asegurate de tener esta línea
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const productUpdate = await Product.findByPk(req.params.id);

    await productUpdate.update({
      name: req.body.name,
      description: req.body.description,
      photo: req.body.photo,
      stock: req.body.stock,
      highlight: req.body.highlight,
    });

    res.json(productUpdate);
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await Product.destroy({ where: { id: req.params.id } });
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

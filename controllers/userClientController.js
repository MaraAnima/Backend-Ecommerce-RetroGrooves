const { Article } = require("../models");
const bcrypt = require("bcryptjs");
const { ClientUser } = require("../models/index");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const allClients = await ClientUser.findAll();
    return res.json(allClients);
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const clientById = await ClientUser.findByPk(req.params.id);
    if (clientById) {
      return res.json(clientById);
    }
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const { name, lastname, email, password, address } = req.body;
    if (!name || !lastname || !email || !password || !address) {
      return res.json({ error: "Todas las propiedades son requeridas obligatoriamente" });
    }
    const hashedPassword = await bcrypt.hash(password, 8);
    const newClient = await ClientUser.create({
      name,
      lastname,
      email,
      address,
      password: hashedPassword,
    });
    return res.json(newClient);
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const userId = req.auth.sub;
    if (userId === req.params.id) {
      const updateClient = await ClientUser.findByPk(req.params.id);
      await updateClient.update({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password,
      });
      res.json(updateClient);
    } else {
      res.send("No se puede modificar info de otro usuario");
    }
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await ClientUser.destroy({ where: { id: req.params.id } });
    res.send("Se ha eliminado correctamente");
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

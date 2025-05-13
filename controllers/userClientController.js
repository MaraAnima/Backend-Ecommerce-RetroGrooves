const { Article } = require("../models");
const bcrypt = require("bcryptjs");
const { ClientUser } = require("../models/index");

// Display a listing of the resource.
async function index(req, res) {
  const allClients = await ClientUser.findAll();
  return res.json(allClients);
}

// Display the specified resource.
async function show(req, res) {
  const clientById = await ClientUser.findByPk(req.params.id);
  if (clientById) {
    return res.json(clientById);
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
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
}

// Update the specified resource in storage.
async function update(req, res) {
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
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  await ClientUser.destroy({ where: { id: req.params.id } });
  res.send("Se ha eliminado correctamente");
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

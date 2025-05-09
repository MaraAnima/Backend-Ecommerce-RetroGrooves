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
/*async function store(req, res) {
  const newClient = { name, lastname, email, password, permission, address } = req.body;
  if (!name || !lastname || !email || !password || !permission || !address) {
    return res.json({ error: "Todas las propiedades son requeridas obligatoriamente" });
  }
  const hashedPassword = await bcrypt.hash(password, 8);
  const newClient = await AdminUser.create({
    name,
    lastname,
    email,
    permission,
    address,
    password: hashedPassword,
  });
  return res.json(newClient);
}*/

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

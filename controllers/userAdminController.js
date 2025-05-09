const { AdminUser } = require("../models/index");
const bcrypt = require("bcryptjs");

// Display a listing of the resource.
async function index(req, res) {
  const result = await AdminUser.findAll();
  res.json(result);
}

// Display the specified resource.
async function show(req, res) {
  const adminById = await AdminUser.findByPk(req.params.id);
  return res.json(adminById);
}

// Store a newly created resource in storage.
async function store(req, res) {
  const { name, lastname, email, password, permission, address } = req.body;
  if (!name || !lastname || !email || !password || !permission || !address) {
    return res.json({ error: "Todas las propiedades son requeridas obligatoriamente" });
  }
  const hashedPassword = await bcrypt.hash(password, 8);
  const newAdmin = await AdminUser.create({
    name,
    lastname,
    email,
    permission,
    address,
    password: hashedPassword,
  });
  return res.json(newAdmin);
}

// Update the specified resource in storage.
async function update(req, res) {
  const updateAdmin = await AdminUser.findByPk(req.params.id);
  await updateAdmin.update({
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    permission: req.body.permission,
    password: req.body.password,
    address: req.body.address,
  });
  res.json(updateAdmin);
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  await AdminUser.destroy({ where: { id: req.params.id } });
  res.send("Se eliminó exitosamente");
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};

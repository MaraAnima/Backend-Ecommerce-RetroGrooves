const { AdminUser } = require("../models/index");
const bcrypt = require("bcryptjs");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const result = await AdminUser.findAll();
    res.json(result);
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const adminById = await AdminUser.findByPk(req.params.id);
    return res.json(adminById);
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
    const newAdmin = await AdminUser.create({
      name,
      lastname,
      email,
      address,
      password: hashedPassword,
    });
    return res.json(newAdmin);
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const updateAdmin = await AdminUser.findByPk(req.params.id);
    await updateAdmin.update({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
    });
    res.json(updateAdmin);
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await AdminUser.destroy({ where: { id: req.params.id } });
    res.send("Se eliminó exitosamente");
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};

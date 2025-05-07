const { User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname || !email || !password) {
    return res.json({ error: "Todas las propiedades son requeridas obligatoriamente" });
  }
  const hashedPassword = await bcrypt.hash(password, 8);
  const newAdmin = await Admin.create({ firstname, lastname, email, password: hashedPassword });
  return res.json(newAdmin);
}

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

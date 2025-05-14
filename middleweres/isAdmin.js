function isAdmin(req, res, next) {
  try {
    if (req.auth.rol === "Client") {
      return res.send("Permisos no autorizados");
    }
    next();
  } catch (error) {
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
}

module.exports = isAdmin;

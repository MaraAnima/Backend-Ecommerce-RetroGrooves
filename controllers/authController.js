const { ClientUser, AdminUser } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authController = {
  login: async (req, res) => {
    try {
      const email = req.body.email;
      const userClient = await ClientUser.findOne({ where: { email: email } });
      if (userClient) {
        const password = req.body.password;
        const compareClient = await bcrypt.compare(password, userClient.password);
        if (compareClient) {
          const tokens = jwt.sign({ sub: userClient.id, rol: "Client" }, "UnStringSecreto");
          return res.json({ tokens });
        } else {
          res.send("Credenciales invalidas de Client ");
        }
      } else {
        const email = req.body.email;
        const userAdmin = await AdminUser.findOne({ where: { email: email } });
        if (userAdmin) {
          const password = req.body.password;
          const compare = await bcrypt.compare(password, userAdmin.password);
          if (compare) {
            const tokenAdmin = jwt.sign({ sub: userAdmin.id, rol: "Admin" }, "UnStringSecreto");
            return res.json({ tokenAdmin });
          } else {
            res.send("Credenciales invalidas de Admin");
          }
        }
      }
    } catch (error) {
      res.send("Error en Credenciales");
    }
  },
};

module.exports = authController;

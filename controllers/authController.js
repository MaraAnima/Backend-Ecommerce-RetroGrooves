const { ClientUser } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authController = {
  login: async (req, res) => {
    try {
      console.log("hola ke hace");
      const email = req.body.email;
      const userClient = await ClientUser.findOne({ where: { email: email } });
      if (userClient) {
        const password = req.body.password;
        console.log(userClient);
        const guardar = await bcrypt.compare(password, userClient.password);

        if (guardar) {
          const tokens = jwt.sign({ sub: userClient.id }, "UnStringSecreto");
          return res.json({ tokens });
        } else {
          res.send("mmns no");
        }
      } else {
        res.send("no mi negro, volve despues");
      }
    } catch (error) {
      res.send("errorrr");
    }
  },
};

module.exports = authController;

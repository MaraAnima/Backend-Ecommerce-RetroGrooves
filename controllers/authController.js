const { ClientUser } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authController = {
  login: async (req, res) => {
    const email = req.body.email;
    const userClient = await ClientUser.findOne({ where: { email: email } });
    if (userClient) {
      const password = req.body.password;
      if (bcrypt.compare(password, userClient.password)) {
        const tokens = jwt.sign({ sub: userClient.id }, "Un string secreto");
        return res.json({ tokens });
      }
    }
  },
};

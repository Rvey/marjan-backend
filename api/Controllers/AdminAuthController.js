const Auth = require("../Models/Auth");
const jwt = require("jsonwebtoken");
const sendMail = require("../Models/mail")
const login = async (req, res) => {
  try {
    const Admins = await Auth.findAllAdmins();

    const { email, password } = req.body;

    // validate user creds
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // validate if user exist in our database
    const CAdmin = Admins.find(
      (admin) =>
        admin.email == req.body.email && admin.password == req.body.password
    );

    if (CAdmin) {
      const token = jwt.sign(
        { id: CAdmin.id },
        `${process.env.JWT_SECRET_KEY}`,
        {
          expiresIn: "2h",
        }
      );
      await sendMail.sendMail(email , password)
      await Auth.update(token, CAdmin.id);
      res.status(200).json(`welcome ${CAdmin.email}`);
    }
    res.status(400).send("Invalid Credentials");
    // create token
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  login,
};

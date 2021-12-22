const Auth = require("../Models/AuthCAdmin");
const jwt = require("jsonwebtoken");
const sendMail = require("../../ultil/mail");

const EmailLogin = async (req, res) => {
  try {
    const Admins = await Auth.findAllCenterAdmins();

    const { email, password } = req.body;

    // validate user creds
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // validate if user exist in our database
    const CAdmin = Admins.find((admin) => admin.email == req.body.email);

    if (CAdmin) {
      await sendMail.sendMail(email, CAdmin.password);
      res.json({ message: "Email has been send with your password" });
    }

    // create token
  } catch (error) {
    res.json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const Admins = await Auth.findAllCenterAdmins();

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
      await Auth.update(token, CAdmin.id);

      res.status(200).json(`welcome ${CAdmin.email}`);
    }
    res.status(400).send("Invalid Credentials");
    // create token
  } catch (error) {
    res.json({ message: error.message });
  }
};

const UpdatePasswordLogin = async (req, res) => {
  try {
    const Admins = await Auth.findAllCenterAdmins();

    const { email, password } = req.body;

    // validate user creds
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // validate if user exist in our database
    const CAdmin = Admins.find((admin) => admin.email == req.body.email);

    if (CAdmin) {
      await Auth.updatePassword(password, CAdmin.id);
      res.json({ message: `password updated successfully${CAdmin.id}` });
    }

    // create token
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  login,
  EmailLogin,
  UpdatePasswordLogin,
};

const Auth = require("../Models/Auth");
const jwt = require("jsonwebtoken");

const createAdmin = async (req, res) => {
  try {
    // Get user input
    const { firstName, lastName, email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const Admins = await Auth.findAllAdmins();

    const oldAdmin = Admins.find((admin) => admin.email == email);

    if (oldAdmin) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    const token = jwt.sign({ email }, `${process.env.JWT_SECRET_KEY}`, {
      expiresIn: "2h",
    });
    // Create user in our database
    const admin = await Auth.create({
      firstName,
      lastName,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: password,
      token: token,
    });

    // Create token

    res.json(admin);
    // return new user
    res.status(201).json(admin);
  } catch (err) {
    console.log(err);
  }
};

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
  createAdmin,
};

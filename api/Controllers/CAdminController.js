const Admin = require("../Models/centerAdmin");
const jwt = require("jsonwebtoken");
const Auth = require("../Models/Auth");
const getAllAdmins = async (req, res) => {
  try {
    const Admins = await Admin.getAll();
    res.json(Admins);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getCenterAdminById = async (req, res) => {
  try {
    const Admins = await Admin.getAll();
    const AdminById = Admins.find((e) => e.id == req.params.id);
    if (!AdminById) {
      res.json({ message: "Center Admin Not Found" });
    }
    res.json(AdminById);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createAdminCenter = async (req, res) => {
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

const updateCenterAdmin = async (req, res) => {
  try {
    await Admin.update(req.body, req.params.id);
    res.json({
      message: "well updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
const deleteCenterAdmin = async (req, res) => {
  try {
    await Admin.destroy(req.params.id);
    res.json({ message: "well deleted" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  getAllAdmins,
  getCenterAdminById,
  updateCenterAdmin,
  createAdminCenter,
  deleteCenterAdmin,
};

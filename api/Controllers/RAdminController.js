const RayonAdmin = require("../Models/AdminRayon");
const jwt = require("jsonwebtoken")
const Auth = require("../Models/Auth")

const getAllAdmins = async (req,res)=>{
    try {
        const Admins = await RayonAdmin.getAll();
        res.json(Admins);
    }catch(error){
        res.json({message: error.message});
    }
};

const getRayonAdminById = async(req,res)=>{
    try{
        const Admins = await RayonAdmin.getAll();
        const AdminById = Admins.find((e) => e.id == req.params.id);
        if (!AdminById) {
            res.json({ message: "Center Admin Not Found" });
          }
          res.json(AdminById);

    }catch(error){
        res.json({message:error.message});
    }
}

const createAdminRayon = async (req, res) => {
    try {
      // Get user input
      const { firstName, lastName, email, password , id_admin_center , rayon } = req.body;
  
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
      const admin = await Auth.createRayonAdmin({
        firstName,
        lastName,
        id_admin_center,
        rayon: rayon,
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

const updateRayonAdmin = async(req,res)=>{
    try{
        await RayonAdmin.update(req.body,req.params.id);
        res.json({
        message : "well updated"
        })
    }catch(error){
        res.json({message: error.message});
    }
}

module.exports = {
    getAllAdmins,
    getRayonAdminById,
    updateRayonAdmin,
    createAdminRayon
  };
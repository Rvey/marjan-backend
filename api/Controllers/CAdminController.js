const Admin = require("../Models/centerAdmin");

const getAllAdmins = async (req,res)=>{
    try {
        const Admins = await Admin.getAll();
        res.json(Admins);
    }catch(error){
        res.json({message: error.messaage});
    }
};

module.exports = {
    getAllAdmins
  };
  
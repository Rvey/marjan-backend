const Admin = require("../Models/centerAdmin");

const getAllAdmins = async (req,res)=>{
    try {
        const Admins = await Admin.getAll();
        res.json(Admins);
    }catch(error){
        res.json({message: error.message});
    }
};

const getCenterAdminById = async(req,res)=>{
    try{
        const Admins = await Admin.getAll();
        const AdminById = Admins.find((e) => e.id == req.params.id);
        if (!AdminById) {
            res.json({ message: "Center Admin Not Found" });
          }
          res.json(AdminById);

    }catch(error){
        res.json({message:error.message});
    }
}
const updateCenterAdmin = async(req,res)=>{
    try{
        await Admin.update(req.body,req.params.id);
        res.json({
        message : "well updated"
        })
    }catch(error){
        res.json({message: error.message});
    }
}

module.exports = {
    getAllAdmins,
    getCenterAdminById,
    updateCenterAdmin
  };
  
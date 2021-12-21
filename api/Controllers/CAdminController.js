const e = require("cors");
const req = require("express/lib/request");
const Admin = require("../Models/centerAdmin");

const getAllAdmins = async (req,res)=>{
    try {
        const Admins = await Admin.getAll();
        res.json(Admins);
    }catch(error){
        res.json({message: error.messaage});
    }
};

const getCenterAdminById = async(req,res)=>{
    try{
        const Admins = await Admin.getAll();
        const Adminbyid = Admins.find((e) => e.id == req.params.id);
        if (!Adminbyid) {
            res.json({ message: "Center Admin Not Found" });
          }
          res.json(Adminbyid);

    }catch(error){
        res.json({message:error.message});
    }
}
const updatecenteradmin = async(req,res)=>{
    try{
        await Admin.update(req.body,req.params.id);
        res.json({
        messaage : "well updated"
        })
    }catch(error){
        res.json({message: error.message});
    }
}

module.exports = {
    getAllAdmins,
    getCenterAdminById,
    updatecenteradmin
  };
  
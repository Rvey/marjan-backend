const { changeUser } = require("../../config/db");
const con = require("../../config/db");

class centerAdmin {
    static async getAll(){
        return new Promise((resolve, reject) =>{
            con.query(`SELECT * FROM admin_center`, (err, res) => {
                if (err) throw err;
                resolve(res);
              });
        });
    }
    static async getCenterAdminById(id){
        con.query(`SELECT FROM admin_center WHERE id =${id}`,(err,res)=>{
            if(err){
                throw err;
            }
            resolve(res);
        })
    }
    static async update(CenterAdmin,id){
        con.query(`UPDATE admin_center SET ? WHERE id = ${id}`,{
            firstName : CenterAdmin.firstName,
            lastName : CenterAdmin.lastName,
            email : CenterAdmin.email,
            password : CenterAdmin.password

        });
    }
    
    
        
    

   
}


module.exports = centerAdmin;

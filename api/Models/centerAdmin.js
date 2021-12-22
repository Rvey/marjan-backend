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
    static async update(RayonAdmin,id){
        con.query(`UPDATE admin_center SET ? WHERE id = ${id}`,{
            firstName : RayonAdmin.firstName,
            lastName : RayonAdmin.lastName,
            email : RayonAdmin.email,
            password : RayonAdmin.password

        });
    }
    
    
        
    

   
}


module.exports = centerAdmin;

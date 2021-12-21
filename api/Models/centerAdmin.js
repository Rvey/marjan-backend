const con = require("../../config/db");

class centerAdmin {
    static getAll(){
        return new Promise((resolve, reject) =>{
            con.query(`SELECT * FROM admin_center`, (err, result) => {
                if (err) throw err;
                resolve(result);
              });
        });
    }
}


module.exports = centerAdmin;

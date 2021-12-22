const con = require("../../config/db");

class Auth {
  static findAllAdmins = () => {
    return new Promise((resolve, reject) => {
      con.query(`SELECT * FROM admin`, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    });
  };
}

module.exports = Auth;

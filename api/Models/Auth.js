const con = require("../../config/db");
class Auth {
  static findAllAdmins = () => {
    return new Promise((resolve, reject) => {
      con.query(`SELECT * FROM admin_center`, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    });
  };

  static create = async (admin_center) => {
    con.query("INSERT INTO admin_center SET ?", {
      firstName: admin_center.firstName,
      lastName: admin_center.lastName,
      email: admin_center.email,
      password: admin_center.password,
      token: admin_center.token
    });
  };

  static update = async (token , id) => {
    con.query(`UPDATE admin_center SET ? WHERE id =${id}`, {
      token: token,
    });
  }
}

module.exports = Auth;

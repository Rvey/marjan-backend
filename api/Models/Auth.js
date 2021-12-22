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

  static create = async (admin_center) => {
    con.query("INSERT INTO admin_center SET ?", {
      firstName: admin_center.firstName,
      lastName: admin_center.lastName,
      email: admin_center.email,
      password: admin_center.password,
      token: admin_center.token
    });
  };
  static createRayonAdmin = async (admin_rayon) => {
    con.query("INSERT INTO chef_rayon SET ?", {
      firstName: admin_rayon.firstName,
      lastName: admin_rayon.lastName,
      email: admin_rayon.email,
      id_admin_center : admin_rayon.id_admin_center,
      password: admin_rayon.password,
      rayon: admin_rayon.rayon,
      token: admin_rayon.token
    });
  };

  static update = async (token , id) => {
    con.query(`UPDATE admin_center SET ? WHERE id =${id}`, {
      token: token,
    });
  }
}

module.exports = Auth;

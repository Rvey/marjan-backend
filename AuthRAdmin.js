const con = require("./config/db");

class Auth {
  static findAllRayonAdmins = () => {
    return new Promise((resolve, reject) => {
      con.query(`SELECT * FROM chef_rayon`, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    });
  };
  static createRayonAdmin = async (admin_rayon) => {
    con.query("INSERT INTO chef_rayon SET ?", {
      firstName: admin_rayon.firstName,
      lastName: admin_rayon.lastName,
      email: admin_rayon.email,
      id_admin_center: admin_rayon.id_admin_center,
      password: admin_rayon.password,
      rayon: admin_rayon.rayon,
      token: admin_rayon.token,
    });
  };
  static create = async (admin_center) => {
    con.query("INSERT INTO chef_rayon SET ?", {
      firstName: admin_center.firstName,
      lastName: admin_center.lastName,
      email: admin_center.email,
      password: admin_center.password,
      token: admin_center.token,
    });
  };
  static update = async (token, id) => {
    con.query(`UPDATE chef_rayon SET ? WHERE id =${id}`, {
      token: token,
    });
  };
  static updatePassword = async (password, id) => {
    con.query(`UPDATE chef_rayon SET ? WHERE id =${id}`, {
      password: password,
    });
  };
}

module.exports = Auth;

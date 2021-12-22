const con = require("../../config/db");

class AdminRayon {
  static async getAll() {
    return new Promise((resolve, reject) => {
      con.query(`SELECT * FROM chef_rayon`, (err, res) => {
        if (err) throw err;
        resolve(res);
      });
    });
  }
  static async getRayonAdminById(id) {
    con.query(`SELECT FROM chef_rayon WHERE id =${id}`, (err, res) => {
      if (err) {
        throw err;
      }
      resolve(res);
    });
  }
  static async update(RayonAdmin, id) {
    con.query(`UPDATE chef_rayon SET ? WHERE id = ${id}`, {
      firstName: RayonAdmin.firstName,
      lastName: RayonAdmin.lastName,
      email: RayonAdmin.email,
      password: RayonAdmin.password,
    });
  }
}

module.exports = AdminRayon;

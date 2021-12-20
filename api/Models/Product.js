const con = require("../../config/db");

class Product {
  static async findAll() {
    return new Promise((resolve, reject) => {
      con.query(`SELECT * FROM admin`, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    });
  }

  static async create(product) {
    con.query("INSERT INTO admin SET ?", {
      firstName: product.firstName,
      lastName: product.lastName,
      email: product.email,
      password: product.password,
    });
  }

  static async update(product, id) {
    con.query(`UPDATE admin SET ? WHERE id =${id}`, {
      firstName: product.firstName,
      lastName: product.lastName,
      email: product.email,
      password: product.password,
    });
  }
  static async destroy(id) {
    con.query(`DELETE FROM admin WHERE id =${id}`, (err, result) => {
      if (err) throw err;
      console.log(JSON.stringify({ message: "userRemoved" }));
    });
  }
}
module.exports = Product;

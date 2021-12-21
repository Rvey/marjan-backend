const con = require("../../config/db");

class Promotion {
  static async findAll() {
    return new Promise((resolve, reject) => {
      con.query(`SELECT * FROM promotions`, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    });
  }
  static async create(promotion) {
    con.query("INSERT INTO promotions SET ?", {
      promotion: promotion.promotion,
      id_chef_rayon: promotion.id_chef_rayon,
      id_produit: promotion.id_produit,
      date_promotion: promotion.date_promotion,
      status: promotion.status,
    });
  }

  static async update(promotion, id) {
    con.query(`UPDATE promotions SET ? WHERE id =${id}`, {
      promotion: promotion.promotion,
      id_chef_rayon: promotion.id_chef_rayon,
      id_produit: promotion.id_produit,
      date_promotion: promotion.date_promotion,
      status: promotion.status,
    });
  }

  static async destroy(id) {
    con.query(`DELETE FROM promotions WHERE id =${id}`, (err, result) => {
      if (err) throw err;
      console.log(JSON.stringify({ message: "promotion Removed" }));
    });
  }
}
module.exports = Promotion;


class CAdmins {
  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.password = data.password;
  }

  static getAllAdmin() {
    return `SELECT * FROM admin`;
  }

  addCAdmin() {
    return `INSERT INTO admin (firstName, lastName, email, password) \
VALUES('${this.firstName}','${this.lastName}', '${this.email}', '${this.password}'`;
  }

  updateCAdmin(id) {
    return `UPDATE admin SET firstName = '${this.firstName}', lastName = '${this.lastName}', email = '${this.email}' ,  password = '${this.password}' WHERE id = ${id}`;
  }

  static getCAdminById(id) {
    console.log(id);
    return `SELECT * FROM admin WHERE id = ${id}`;
  }

  static deleteCAdminById(id) {
    return `DELETE FROM admin WHERE id = ${id}`;
  }
}
module.exports = CAdmins;

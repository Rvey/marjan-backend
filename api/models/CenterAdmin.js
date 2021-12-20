class CAdmins {
  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.password = data.password;
  }

  static getAllAdmin() {
    return `SELECT * FROM admi`;
  }
}
module.exports = CAdmins;

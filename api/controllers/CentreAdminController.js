const db = require("../../config/db");
const CAdmin = require("../models/CenterAdmin");

module.exports = {

  /**
   * store user details.
   */
  userStore: (req, res, next) => {
     const userData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
        mobile: req.body.mobile,
     }
     const user = new User(userData);

     db.query(user.addUser(), (err, result) => {
        if (err) {
           res.status(400).json({
              'error': err.message,
              'error_line': err.files,
           })
        };

        db.query(User.getUserById(result.insertId), (err, userData) => {
           console.log(userData[0]);
           res.status(200).json({
              'data': userData[0],
           });
        })
     });
  },

  /**
   * Get the lists of all users.
   */
  AdminsLists: (req, res, next) => {
     db.query(CAdmin.getAllAdmin(), (err, result) => {
        if (err) {
           res.status(400).json({
              'error': err.message,
           })
        }

        res.status(200).json({
           'data': result,
        });
     })
  },


}
const db = require("../../config/db");
const CAdmin = require("../models/CenterAdmin");

module.exports = {
  /**
   * store user details.
   */
  userStore: (req, res, next) => {
    const userData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      email: req.body.email,
    };
    // const admin = new CAdmin(userData);
console.log('f');
    // db.query(
    //   "INSERT INTO admin (firstName, lastName, email, password) VALUE (? , ? , ? , ? )",
    //   userData.firstName,
    //   userData.lastName,
    //   userData.password,
    //   userData.email,
    //   (err, result) => {
    //     if (err) {
    //       res.status(400).json({
    //         "error": err.message,
    //       });
    //     }else {
    //       res.send("admin inserted")
    //     }

    //     // db.query(CAdmin.getCAdminById(result.LAST_INSERT_ID), (err, userData) => {
    //     //    console.log(userData[0]);
    //     //    res.status(200).json({
    //     //       'data': userData[0],
    //     //    });
    //     // })
    //   }
    // );
  },

  /**
   * Get the lists of all users.
   */
  AdminsLists: (req, res, next) => {
    db.query(CAdmin.getAllAdmin(), (err, result) => {
      if (err) {
        res.status(400).json({
          error: err.message,
        });
      }

      res.status(200).json({
        data: result,
      });
    });
  },

  /**
   * Update admin details.
   */
  updateUser: (req, res, next) => {
    const userData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      email: req.body.email,
    };

    const admin = new CAdmin(userData);
    const id = req.params.id;
    db.query(admin.updateCAdmin(id), (err, result) => {
      if (err) {
        res.status(400).json({
          error: err.message,
        });
      }

      db.query(CAdmin.getCAdminById(id), (err, userData) => {
        if (err) {
          res.status(400).json({
            error: err.message,
          });
        }

        res.status(200).json({
          message: "admin updated successfully.",
          data: userData[0],
        });
        console.log(userData[0]);
      });
    });
  },
  /**
   * get user details by admin id.
   */
  getCAdminById: (req, res, next) => {
    const id = req.params.id;
    db.query(CAdmin.getCAdminById(id), (err, result) => {
      if (err) {
        res.status(404).json({
          error: err.message,
        });
      }

      res.status(200).json({
        data: result[0],
      });
    });
  },

  deleteCAdmin: (req, res, next) => {
    const id = req.params.id;
    db.query(CAdmin.deleteCAdminById(id), (err, result) => {
      if (err) {
        res.status(404).json({
          error: err.message,
        });
      }

      res.status(200).json({
        message: "admin deleted successfully.",
      });
    });
  },
};

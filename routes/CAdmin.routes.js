module.exports = (app) => {
  const AdminController = require("../api/controllers/CentreAdminController");

  app.post('/CAdmin', AdminController.userStore);
  // get all CAdmin
  app.get("/CAdmins", AdminController.AdminsLists);

  // Retrieve a single CAdmin by id
  app.get("/CAdmin/:id", AdminController.getCAdminById);

  // Update a CAdmin with id
  app.put("/CAdmin/:id", AdminController.updateUser);

  // Delete a CAdmin by id
  app.delete("/CAdmin/:id", AdminController.deleteCAdmin);
};

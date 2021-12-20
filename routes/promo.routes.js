module.exports = (app) => {
  const productController = require("../api/controllers/productController");

  app.get("/", productController.getAllProducts);

  app.post("/CAdmins", productController.createProduct);
  // get all CAdmin
  app.get("/CAdmins/:id", productController.getProductById);

  // // Retrieve a single CAdmin by id
  // app.get("/CAdmin/:id", AdminController.getCAdminById);

  // Update a CAdmin with id
  app.put("/updateCA/:id", productController.updateProduct);

  
  // Delete a CAdmin by id
  app.delete("/deleteCA/:id", productController.deleteProduct);
};

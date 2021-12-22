module.exports = (app) => {
  const promotionController = require("../api/Controllers/PromotionController");

  const Auth = require("../api/Controllers/AdminAuthController");

  const CAdminController = require("../api/Controllers/CAdminController");

  app.get("/promotion", promotionController.getAllPromotions);

  app.post("/promotion", promotionController.createPromotion);

  app.get("/promotion/:id", promotionController.getPromotionById);

  app.put("/updatePromo/:id", promotionController.updatePromotion);

  app.delete("/deletePromo/:id", promotionController.deletePromotion);

  // centerAdmin route

  app.get("/adminCenter", CAdminController.getAllAdmins);
  app.get("/adminCenter/:id", CAdminController.getCenterAdminById);
  app.put("/UpdateAdminCenter/:id", CAdminController.updatecenteradmin);

  /**
   *
   * Auth routes
   */
  app.post("/login", Auth.login);

  app.post("/register", Auth.createAdmin);
};

module.exports = (app) => {
  const promotionController = require("../api/Controllers/PromotionController");

  const Auth = require("../api/Controllers/AdminAuthController");

  const CAdminController = require("../api/Controllers/CAdminController");
  const RAdminController = require("../api/Controllers/RAdminController");

  app.get("/promotion", promotionController.getAllPromotions);

  app.post("/promotion", promotionController.createPromotion);

  app.get("/promotion/:id", promotionController.getPromotionById);

  app.put("/updatePromo/:id", promotionController.updatePromotion);

  app.delete("/deletePromo/:id", promotionController.deletePromotion);

  // centerAdmin route

  app.get("/adminCenter", CAdminController.getAllAdmins);
  app.post("/AdminCenter", CAdminController.createAdminCenter);
  app.get("/adminCenter/:id", CAdminController.getCenterAdminById);
  app.put("/UpdateAdminCenter/:id", CAdminController.updateCenterAdmin);

  // RayonAdmin routes
  app.get("/adminRayon", RAdminController.getAllAdmins);
  app.post("/AdminRayon", RAdminController.createAdminRayon);
  app.get("/adminRayon/:id", RAdminController.getRayonAdminById);
  app.put("/UpdateAdminRayon/:id", RAdminController.updateRayonAdmin);

  /**
   *
   * Auth routes
   */
  app.post("/login", Auth.login);
};

module.exports = (app) => {
  const promotionController = require("../api/Controllers/PromotionController");
  const CAdminController = require("../api/Controllers/CAdminController");



  app.get("/", promotionController.getAllPromotions);

  app.post("/promotion", promotionController.createPromotion);

  app.get("/promotion/:id", promotionController.getPromotionById);

  app.put("/updatePromo/:id", promotionController.updatePromotion);

  app.delete("/deletePromo/:id", promotionController.deletePromotion);

  // centerAdmin route

  app.get("/getcenteradmin", CAdminController.getAllAdmins);
  app.get("/onecenteradmin/:id", CAdminController.getCenterAdminById);
  app.put("/updatcenteradmin/:id", CAdminController.updatecenteradmin);




  /**
   *
   * Auth routes
   */
  app.post("/login", (req, res) => {
    res.json({ Message: "login" });
  });

  app.post("/register", (req, res) => {

  });
  app.get("/profile", (req, res) => {
    res.json({ Message: "register" });
  });
};


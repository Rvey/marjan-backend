module.exports = (app) => {
  const promotionController = require("../api/Controllers/PromotionController");
  const Register


  app.get("/", promotionController.getAllPromotions);

  app.post("/promotion", promotionController.createPromotion);

  app.get("/promotion/:id", promotionController.getPromotionById);

  app.put("/updatePromo/:id", promotionController.updatePromotion);

  app.delete("/deletePromo/:id", promotionController.deletePromotion);

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


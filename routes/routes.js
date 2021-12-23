module.exports = (app) => {
  const promotionController = require("../api/Controllers/PromotionController");
  const CAdminController = require("../api/Controllers/CAdminController");
  const RAdminController = require("../api/Controllers/RAdminController");

  // PROMOTION
  app.get("/promotion", promotionController.getAllPromotions);
  app.post("/promotion", promotionController.createPromotion);
  app.get("/promotion/:id", promotionController.getPromotionById);
  app.put("/updatePromo/:id", promotionController.updatePromotion);
  app.delete("/deletePromo/:id", promotionController.deletePromotion);
  
  // app.post("/updatePromo", promotionController.updatePromotion);
  // centerAdmin route
  app.get("/adminCenter", CAdminController.getAllAdmins);
  app.post("/AdminCenter", CAdminController.createAdminCenter);
  app.get("/adminCenter/:id", CAdminController.getCenterAdminById);
  app.put("/UpdateAdminCenter/:id", CAdminController.updateCenterAdmin);
  app.delete("/DeleteAdminCenter/:id", CAdminController.deleteCenterAdmin);
  app.post("/validation/CA", CAdminController.EmailLogin);
  app.post("/login/CA", CAdminController.login);

  // RayonAdmin routes
  app.get("/adminRayon", RAdminController.getAllAdmins);
  app.post("/AdminRayon", RAdminController.createAdminRayon);
  app.get("/adminRayon/:id", RAdminController.getRayonAdminById);
  app.put("/UpdateAdminRayon/:id", RAdminController.updateRayonAdmin);
  app.delete("/DeleteAdminRayon/:id", RAdminController.deleteRayonAdmin);
  app.post("/validation/RA", RAdminController.EmailLogin);
  app.post("/login/RA", RAdminController.login);

  // const cookieParser = require("cookie-parser");
  // const sessions = require("express-session");

  // const oneDay = 1000 * 60 * 60 * 24;

  //session middleware
  // app.use(
  //   sessions({
  //     secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  //     saveUninitialized: true,
  //     cookie: { maxAge: oneDay },
  //     resave: false,
  //   })
  // );
  // app.use(cookieParser());

  // //username and password
  // const myusername = "user1";
 

  // // a variable to save a session
  // const session;

  // app.post("/user", (req, res) => {
  //   if (req.body.username == myusername) {
  //     session = req.session;
  //     session.userid = req.body.username;
  //     console.log(req.session);
  //     res.json({session : req.session})
  //     res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
  //   } else {
  //     res.send("Invalid username or password");
  //   }
  // });
};

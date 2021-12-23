const Promotion = require("../Models/Promotion");

const getAllPromotions = async (req, res) => {
  try {
    const Promotions = await Promotion.findAll();
    res.json(Promotions);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getPromotionById = async (req, res) => {
  try {
    const Promotions = await Promotion.findAll();
    const promotion = Promotions.find((p) => p.id == req.params.id);
    if (!promotion) {
      res.json({ message: "Promotion Not Found" });
    }
    res.json(promotion);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createPromotion = async (req, res) => {
  try {
    await Promotion.create(req.body);
    res.json({
      message: "Promotion Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updatePromotion = async (req, res) => {
  try {
    const Promotions = await Promotion.findAll();
    const promo = Promotions.find((p) => p.id == req.params.id);

    const { promotion , id_chef_rayon , id_product , id_rayon , date_promotion , status } = promo


    if (promo) {
      let date = new Date();
      // let hours = 12 - date.getHours();
      let hours = date.getHours();

      if (hours <= 8 || hours > 12) {
        // promo.status = "Not Processed";
        // await Promotion.update(promo, req.params.id);
        res.json({ message: "you cannot update status" });
      } else {
        promo.status = "Processed";
        await Promotion.update(promo, req.params.id);
        res.json({ message: "status updated" });
      }
    }
    res.json({
      message: "promotion not found",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deletePromotion = async (req, res) => {
  try {
    await Promotion.destroy(req.params.id);
    res.json({
      message: "Promotion Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  createPromotion,
  getAllPromotions,
  getPromotionById,
  deletePromotion,
  updatePromotion,
};

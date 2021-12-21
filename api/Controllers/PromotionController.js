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
    const Promotion = Promotions.find((u) => u.id == req.params.id);
    if (!Promotion) {
      res.json({ message: "Promotion Not Found" });
    }
    res.json(Promotion);
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
    await Promotion.update(req.body, req.params.id);
    res.json({
      message: "Promotion Updated",
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
  updatePromotion
};

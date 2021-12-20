const Product = require("../Models/Product");
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const products = await Product.findAll();
    const product = products.find((u) => u.id == req.params.id);
    if (!product) {
      res.json({ message: "product Not Found" });
    }
    res.json(product);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.json({
      message: "Product Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, req.params.id);
    res.json({
      message: "Product Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.destroy(req.params.id);
    res.json({
      message: "Product Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
};

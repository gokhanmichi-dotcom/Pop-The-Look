const products = require("../models/Product");

const getProducts = (req, res) => {
  res.json(products);
};

module.exports = {
  getProducts
};

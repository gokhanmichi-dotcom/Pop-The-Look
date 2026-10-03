const orders = require("../models/Order");

const getOrders = (req, res) => {
  res.json(orders);
};

module.exports = {
  getOrders
};

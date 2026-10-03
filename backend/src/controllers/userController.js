const users = require("../models/User");

const getUsers = (req, res) => {
  res.json(users);
};

module.exports = {
  getUsers
};

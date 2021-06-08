const asyncHandler = require("express-async-handler");
const { Item } = require("../models");

module.exports = {
  list: asyncHandler(async (req, res) => {
    const items = await Item.findAll({});

    if (!items) {
      res.status(400).send("아이템이 없습니다");
    } else {
      res.send(items);
    }
  }),
};

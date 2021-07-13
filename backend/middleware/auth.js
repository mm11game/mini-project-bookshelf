const asyncHandler = require("express-async-handler");
const { generateToken, verifyToken } = require("../token/token");
const { User, Book } = require("../models");

module.exports = {
  auth: asyncHandler(async (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) {
      throw new Error("토큰없슴");
    }
    if (token.startsWith("Bearer")) {
      try {
        let decoded = verifyToken(token.split(" ")[1]);

        req.tokenUser = await User.findOne({
          where: { id: decoded },
        });

        next();
      } catch (err) {
        throw err;
      }
    }
  }),
};

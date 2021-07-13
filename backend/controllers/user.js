const { User } = require("../models");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../token/token");
const bcrypt = require("bcrypt");
const saltRound = 10;

module.exports = {
  login: asyncHandler(async (req, res) => {
    const { name, password } = req.body;

    const user = await User.findOne({
      where: { name },
    });

    if (!user) {
      res.status(401);
      throw new Error("해당 유저가 없음");
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        try {
          if (result) {
            let token = generateToken(user.id);
            res.send({ user, token });
          } else {
            res.status(404);
            throw new Error("비밀번호 오류"); //비밀번호 오류시 서버가 깨진다.
          }
        } catch (err) {
          console.log(err);
        }
      });
    }
  }),

  signup: asyncHandler(async (req, res) => {
    const { name, password, address, phone } = req.body;

    const user = await User.findOne({
      where: { name: name },
    });

    if (user) {
      res.status(401);
      throw new Error("이미 가입한 사람");
    } else {
      bcrypt.genSalt(saltRound, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
          try {
            if (hash) {
              const createUser = await User.create({
                name,
                password: hash,
                address,
                phone,
              });

              let token = generateToken(createUser.id);

              res.send({ createUser, token });
            } else {
              throw new Error("해쉬 오류");
            }
          } catch (err) {
            console.log(err);
          }
        });
      });
    }
  }),
  logout: asyncHandler(async (req, res) => {
    res.send("토큰을 클라이언트에서 없애서 잘 로그아웃 됨");
  }),
};

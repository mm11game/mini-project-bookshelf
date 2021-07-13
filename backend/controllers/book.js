const asyncHandler = require("express-async-handler");
const { Book, Memo } = require("../models");
const { generateToken } = require("../token/token");
module.exports = {
  bookList: asyncHandler(async (req, res) => {
    let books = await Book.findAll({});

    if (!books || books.length === 0) {
      res.status(400).send("책이 없습니다");
    } else {
      res.send(books);
    }
  }),
  bookUpload: asyncHandler(async (req, res) => {
    const { name, writer, publisher, when } = req.body;
    const book = await Book.findOne({
      where: { name: name },
    });

    if (book) {
      res.status(401);
      throw new Error("이미 책이 있다");
    } else {
      const createBook = await Book.create({
        name,
        writer,
        publisher,
        when,
        userId: req.tokenUser.id,
      });

      res.send(createBook);
    }
  }),
  getMemo: asyncHandler(async (req, res) => {
    const { bookid } = req.headers;

    const memo = await Memo.findOne({
      where: {
        user_id: req.tokenUser.id,
        book_id: bookid,
      },
    });

    if (!memo) {
      res.status(401);
      res.send("메모를 찾을수 없습니다");
    }
    res.send(memo);
  }),
  postMemo: asyncHandler(async (req, res) => {
    const { content } = req.body;
    const { bookid } = req.headers;

    const [memo, created] = await Memo.findOrCreate({
      where: {
        user_id: req.tokenUser.id,
        book_id: bookid,
      },
      defaults: {
        user_id: req.tokenUser.id,
        book_id: bookid,
        content: content,
      },
    });

    res.send(memo);
  }),
  updateMemo: asyncHandler(async () => {}),
};

//   signup: asyncHandler(async (req, res) => {
//     const { name, password, address, phone } = req.body;

//     const user = await User.findOne({
//       where: { name: name },
//     });

//     if (user) {
//       res.status(401);
//       throw new Error("이미 가입한 사람");
//     } else {
//       bcrypt.genSalt(saltRound, (err, salt) => {
//         bcrypt.hash(password, salt, async (err, hash) => {
//           try {
//             if (hash) {
//               const createUser = await User.create({
//                 name,
//                 password: hash,
//                 address,
//                 phone,
//               });

//               let token = generateToken(createUser.id);

//               res.send({ createUser, token });
//             } else {
//               throw new Error("해쉬 오류");
//             }
//           } catch (err) {
//             console.log(err);
//           }
//         });
//       });
//     }
//   }),

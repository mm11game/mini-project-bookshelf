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
  bookDelete: asyncHandler(async (req, res) => {
    const { bookid } = req.headers;
    const deleted = await Book.destroy({
      where: { userId: req.tokenUser.id, id: bookid },
    });
    res.send("잘지워짐");
  }),
  getMemoList: asyncHandler(async (req, res) => {
    const memo = await Memo.findAll({
      where: {
        user_id: req.tokenUser.id,
      },
      include: {
        model: Book,
      },
    });

    if (!memo) {
      res.status(401);
      res.send("메모를 찾을수 없습니다");
    }
    res.send(memo);
  }),
  postMemo: asyncHandler(async (req, res) => {
    const { content, bookId } = req.body;
    const [memo, created] = await Memo.findOrCreate({
      where: {
        user_id: req.tokenUser.id,
        book_id: bookId,
      },
      defaults: {
        user_id: req.tokenUser.id,
        book_id: bookId,
        content: content,
      },
    });

    res.send(memo);
  }),
  deleteMemo: asyncHandler(async (req, res) => {
    const { memoid } = req.headers;

    console.log(memoid);
    const deleted = await Memo.destroy({
      where: { id: memoid, user_id: req.tokenUser.id },
    });
    res.send("잘지워짐");
  }),
  updateMemo: asyncHandler(async (req, res) => {
    const { changedContent, memoId } = req.body;

    const changed = await Memo.update(
      { content: changedContent },
      {
        where: {
          user_id: req.tokenUser.id,
          id: memoId,
        },
      }
    );

    res.send(changed);
  }),
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

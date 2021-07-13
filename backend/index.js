const express = require("express");
const app = express();

const port = 5000;
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./routes/user.js");
const bookRoutes = require("./routes/book.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRoutes);
app.use("/book", bookRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

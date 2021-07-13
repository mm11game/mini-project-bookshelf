import { atom } from "recoil";
////////////////
const token = !!localStorage.getItem("Token")
  ? localStorage.getItem("Token")
  : "";

export const tokenState = atom({
  key: "tokenState",
  default: token,
});
//////////////////

const myBooks = !!localStorage.getItem("myBooks")
  ? JSON.parse(localStorage.getItem("myBooks"))
  : [];
export const myBooksState = atom({
  key: "myBooksState",
  default: [...myBooks],
});
////////////
export const memoState = atom({
  key: "memoState",
  default: [],
});

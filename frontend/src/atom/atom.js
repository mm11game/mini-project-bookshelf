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

export const myBooksState = atom({
  key: "myBooksState",
  default: [],
});
////////////
export const memoState = atom({
  key: "memoState",
  default: [],
});
////////////
const user = !!localStorage.getItem("User")
  ? JSON.parse(localStorage.getItem("User"))
  : {};

export const userState = atom({
  key: "userState",
  default: { ...user },
});

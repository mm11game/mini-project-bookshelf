import React from "react";
import { useRecoilState } from "recoil";
import { memoState, myBooksState } from "../atom/atom";
import axios from "axios";

const BookObj = ({ book }) => {
  const token = window.localStorage.getItem("Token");
  const [myBooks, setMyBooks] = useRecoilState(myBooksState);

  const addBookHandler = () => {
    setMyBooks(() => {
      if (myBooks.find((e) => e.id === book.id)) {
        return [...myBooks];
      } else {
        return [...myBooks, book];
      }
    });
  };
  console.log("마이북스", myBooks);

  return (
    <div style={{ border: "1px solid black" }}>
      <h1>{book.name}</h1>
      <h2>{book.writer}</h2>
      <h2>{book.publisher}</h2>
      <h2>{book.when}</h2>
      <button onClick={addBookHandler}>나의 책장에 추가</button>
    </div>
  );
};

export default BookObj;

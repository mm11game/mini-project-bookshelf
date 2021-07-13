import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { memoState, myBooksState } from "../atom/atom";

const BookObj = ({ book }) => {
  const [myBooks, setMyBooks] = useRecoilState(myBooksState);
  const [memos, setMemos] = useRecoilState(memoState);

  const addBookHandler = () => {
    const memo = memos.find((m) => m.book_id === book.id);

    const newObj = {
      ...book,
      memo,
    };

    setMyBooks(() => {
      const existBook = myBooks.find((b) => b.id === newObj.id);
      if (existBook) {
        return myBooks.map((x) => (x.id === existBook.id ? newObj : x));
      } else {
        return [...myBooks, newObj];
      }
    });
  };
  useEffect(() => {
    window.localStorage.setItem("myBooks", JSON.stringify(myBooks));
  }, [myBooks]);

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

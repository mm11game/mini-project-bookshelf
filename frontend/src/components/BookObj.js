import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { memoState, myBooksState } from "../atom/atom";

const BookObj = ({ book, removeBookHandler }) => {
  const [myBooks, setMyBooks] = useRecoilState(myBooksState);
  const [memos, setMemos] = useRecoilState(memoState);
  useEffect(() => {
    window.localStorage.setItem("myBooks", JSON.stringify(myBooks));
  }, [myBooks]);

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

  return (
    <div style={{ border: "1px solid black" }}>
      <h1>{book.name}</h1>
      <h2>{book.writer}</h2>
      <h2>{book.publisher}</h2>
      <h2>{book.when}</h2>
      <button onClick={addBookHandler}>나의 책장에 추가</button>
      <button onClick={() => removeBookHandler(book)}>
        책장에서 지워버리기
      </button>
    </div>
  );
};

export default BookObj;

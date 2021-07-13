import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { memoState, myBooksState } from "../atom/atom";

const BookObj = ({ book, removeBookHandler, addBooksHandler }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>{book.name}</h1>
      <h2>{book.writer}</h2>
      <h2>{book.publisher}</h2>
      <h2>{book.when}</h2>
      <button onClick={() => addBooksHandler(book)}>나의 책장에 추가</button>
      <button onClick={() => removeBookHandler(book)}>
        책장에서 지워버리기
      </button>
    </div>
  );
};

export default BookObj;

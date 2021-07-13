import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { memoState, myBooksState } from "../atom/atom";
import MyBookObj from "../components/MyBookObj";

const MyBookPage = () => {
  const [mybooks, setMyBooks] = useRecoilState(myBooksState);

  return (
    <div>
      <h1>나의 책장 목록</h1>
      {mybooks.map((mybook) => (
        <MyBookObj key={mybook.id} mybook={mybook} memo={mybook.memo} />
      ))}
    </div>
  );
};

export default MyBookPage;

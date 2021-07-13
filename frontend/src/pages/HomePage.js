import React, { useState, useEffect } from "react";
import axios from "axios";
import BookObj from "../components/BookObj";
import { useRecoilState } from "recoil";
import { memoState, tokenState } from "../atom/atom";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [token, setToken] = useRecoilState(tokenState);
  const [memos, setMemos] = useRecoilState(memoState);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/book");
      setBooks(() => data);
    };
    fetchData();

    const fetchMemo = async () => {
      const { data } = await axios.get("http://localhost:5000/book/memo", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMemos(() => data);
    };
    fetchMemo();
  }, []);

  console.log("메모스", memos);

  useEffect(() => {
    setToken(() => window.localStorage.getItem("Token"));
  }, [token]);

  return (
    <div>
      {books.map((book) => (
        <BookObj key={book.id} book={book} />
      ))}
    </div>
  );
};

export default HomePage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import BookObj from "../components/BookObj";
import { useRecoilState } from "recoil";
import { memoState, tokenState, userState } from "../atom/atom";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [token, setToken] = useRecoilState(tokenState);
  const [memos, setMemos] = useRecoilState(memoState);
  const [user, setUser] = useRecoilState(userState);

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

  useEffect(() => {
    setToken(() => window.localStorage.getItem("Token"));
  }, [token]);

  console.log(books);

  const removeBookHandler = async (book) => {
    setBooks(() => {
      return books.filter((e) => {
        if (e.id === book.id && e.userId === user.id) {
          return false;
        } else {
          return true;
        }
      });
    });
    await axios.delete("http://localhost:5000/book/", {
      headers: { Authorization: `Bearer ${token}`, bookid: book.id },
    });
  };

  return (
    <div>
      {books.map((book) => (
        <BookObj
          key={book.id}
          book={book}
          removeBookHandler={removeBookHandler}
        />
      ))}
    </div>
  );
};

export default HomePage;

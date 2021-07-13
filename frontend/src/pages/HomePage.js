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

  const removeBookHandler = async (book) => {
    console.log(user, book.id);
    if (user) {
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
    }
  };
  const addBooksHandler = async (book) => {
    const body = {
      bookId: book.id,
      content: "없음",
    };
    await axios.post("http://localhost:5000/book/memo", body, {
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
          addBooksHandler={addBooksHandler}
        />
      ))}
    </div>
  );
};

export default HomePage;

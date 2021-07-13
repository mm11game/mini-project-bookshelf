import React, { useState, useEffect } from "react";
import axios from "axios";
import BookObj from "../components/BookObj";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [token, setToken] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/book");

      setBooks(data);
    };
    fetchData();
  }, []);

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

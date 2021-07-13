import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
const axios = require("axios");

const BookUploadPage = () => {
  const [details, setDetails] = useState({
    name: "",
    writer: "",
    publisher: "",
    when: "",
  });
  const history = useHistory();
  const token = window.localStorage.getItem("Token");
  const saveBook = async () => {
    const body = { ...details };

    await axios.post("http://localhost:5000/book", body, {
      headers: { Authorization: `Bearer ${token}` },
    });

    history.push("/");
  };
  return (
    <div>
      <div>
        <Link to="/">Back</Link>
      </div>

      <input
        placeholder="이름"
        name="name"
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
      ></input>
      <input
        placeholder="저자"
        name="writer"
        onChange={(e) => setDetails({ ...details, writer: e.target.value })}
      ></input>
      <input
        placeholder="출판사"
        name="publisher"
        onChange={(e) => setDetails({ ...details, publisher: e.target.value })}
      ></input>
      <input
        placeholder="발행일자"
        name="when"
        onChange={(e) => setDetails({ ...details, when: e.target.value })}
      ></input>
      <button onClick={saveBook}>가입하기</button>
    </div>
  );
};

export default BookUploadPage;

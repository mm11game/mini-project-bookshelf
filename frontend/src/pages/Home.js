import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Item from "../components/Item";

const axios = require("axios");

const Home = () => {
  const [items, setItems] = useState([]);
  const history = useHistory();
  const getToken = window.localStorage.getItem("Token");

  useEffect(async () => {
    const { data } = await axios.get("http://localhost:5000/item/list");
    setItems(data);
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("Token");
    history.push("/");
  };
  return (
    <>
      <div>스토리시티 과제</div>
      {getToken ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (
        <>
          <Link to="/login">
            <button>로그인</button>
          </Link>
          <Link to="/register">
            <button>회원가입</button>
          </Link>
        </>
      )}

      <div>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <Link to="/cart">
        <div>장바구니</div>
      </Link>
    </>
  );
};

export default Home;

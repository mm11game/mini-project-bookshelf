import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokenState, userState } from "../atom/atom";
const axios = require("axios");

const LoginPage = () => {
  const [details, setDetails] = useState({ name: "", password: "" });
  const history = useHistory();
  const [token, setToken] = useRecoilState(tokenState);
  const [user, setUser] = useRecoilState(userState);

  const loginAndSaveToken = async () => {
    const body = { ...details };
    const { data } = await await axios.post(
      "http://localhost:5000/user/login",
      body
    );
    window.localStorage.setItem("Token", data.token);
    window.localStorage.setItem("User", JSON.stringify(data.user));

    setToken(() => data.token);
    setUser(() => data.user);
    history.push("/");
  };

  return (
    <div>
      <h1>로그인페이지</h1>
      <div>
        <Link to="/">Back</Link>
      </div>
      <input
        placeholder="이름"
        name="name"
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
      ></input>
      <input
        placeholder="비밀번호"
        name="password"
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
      ></input>
      <button onClick={loginAndSaveToken}>완료</button>
    </div>
  );
};

export default LoginPage;

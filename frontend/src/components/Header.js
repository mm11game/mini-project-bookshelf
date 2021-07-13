import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { useRecoilState } from "recoil";
import { tokenState, userState } from "../atom/atom";

const Header = () => {
  const history = useHistory();
  const [user, setUser] = useRecoilState(userState);
  const [token, setToken] = useRecoilState(tokenState);

  useEffect(() => {
    setToken(() => window.localStorage.getItem("Token"));
  }, [token]);

  const handleLogout = () => {
    window.localStorage.removeItem("Token");
    window.localStorage.removeItem("myBooks");
    window.localStorage.removeItem("User");
    setToken(() => null);
    setUser(() => null);
    history.push("/");
  };

  return (
    <>
      <Link to="/">
        <h1>스토리시티 책장</h1>
      </Link>

      {token ? (
        <>
          <h3>{user.name}님께서 접속중</h3>
          <button onClick={handleLogout}>로그아웃</button>
          <Link to="/book">
            <button>책 업로드</button>
          </Link>
          <Link to="/mybook">
            <button>나의 책장</button>
          </Link>
        </>
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
    </>
  );
};

export default Header;

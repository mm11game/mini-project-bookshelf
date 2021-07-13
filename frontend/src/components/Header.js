import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { useRecoilState } from "recoil";
import { tokenState } from "../atom/atom";

const Header = () => {
  const history = useHistory();

  const [token, setToken] = useRecoilState(tokenState);

  useEffect(() => {
    setToken(() => window.localStorage.getItem("Token"));
  }, [token]);

  const handleLogout = () => {
    window.localStorage.removeItem("Token");
    setToken(() => null);
    history.push("/");
  };

  return (
    <>
      <Link to="/">
        <h1>스토리시티 책장</h1>
      </Link>

      {token ? (
        <>
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

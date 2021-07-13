import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { tokenState } from "../atom/atom";
import MyBookObj from "../components/MyBookObj";

const MyBookPage = () => {
  const [myMemos, setMyMemos] = useState([]);
  const [token, setToken] = useRecoilState(tokenState);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/book/memo", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMyMemos(() => data);
    };
    fetchData();
  }, []);

  console.log(myMemos);

  const handleUpdate = async (memo, changedContent) => {};
  const handleDelete = async (memo) => {
    setMyMemos(() => {
      return myMemos.filter((x) => x.id !== memo.id);
    });
    await axios.delete("http://localhost:5000/book/memo", {
      headers: { Authorization: `Bearer ${token}`, memoId: memo.id },
    });
  };
  return (
    <div>
      <h1>나의 책장 목록</h1>
      {myMemos.map((memo) => {
        return (
          <MyBookObj
            key={memo.id}
            memo={memo}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default MyBookPage;

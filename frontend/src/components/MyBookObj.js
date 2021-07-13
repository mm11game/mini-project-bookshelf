import React from "react";

const MyBookObj = ({ mybook, memo }) => {
  const deleteMyBookHandler = () => {
    console.log(mybook, memo);
  };
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>{mybook.name}</h1>
      <h2>{mybook.writer}</h2>
      <h2>{mybook.publisher}</h2>
      <h2>{mybook.when}</h2>
      <h2>메모 : {memo !== undefined ? memo.content : ""}</h2>
      <button onClick={deleteMyBookHandler}>책장에서 삭제</button>
      <button onClick={deleteMyBookHandler}>메모 바꾸기</button>
    </div>
  );
};

export default MyBookObj;

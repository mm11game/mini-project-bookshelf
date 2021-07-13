import React, { useState } from "react";

const MyBookObj = ({ memo, handleUpdate, handleDelete }) => {
  const [edit, setEdit] = useState(false);
  const [changedContent, setChangedContent] = useState(memo.content);

  // handleUpdate
  const editHandler = () => {
    setEdit((old) => !old);
    handleUpdate(memo, changedContent);
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <div>제목: {memo.Book.name}</div>
      <div>저자: {memo.Book.writer}</div>
      <div>출판사: {memo.Book.publisher}</div>
      <div>출판일: {memo.Book.when}</div>
      {edit ? (
        <>
          <div>
            <input
              name="memo"
              value={changedContent}
              onChange={(e) => setChangedContent(() => e.target.value)}
            ></input>
          </div>
        </>
      ) : (
        <>
          <div>메모: {memo.content}</div>
        </>
      )}
      <button onClick={editHandler}>{edit ? "적용" : "수정"}</button>
      <button onClick={() => handleDelete(memo)}>삭제</button>
    </div>
  );
};

export default MyBookObj;

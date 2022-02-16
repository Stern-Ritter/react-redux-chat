import React from "react";
import { useSelector } from "react-redux";
import Message from "../message/message";
import style from "./chat-list.module.css";

function ChatList() {
  const { loading, data } = useSelector((store) => store.messages);
  return (
    <>
      <h1 className={style.title}>Сообщения: </h1>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <ul className={style.list}>
          {data.map((content, idx) => (
            <Message key={idx} content={content}></Message>
          ))}
        </ul>
      )}
    </>
  );
}

export default ChatList;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { State } from "../../services/store/store";
import { getMessages } from "../../services/actions";
import Message from "../message/message";
import style from "./chat-list.module.css";

const selectNumMessages = createSelector(
  (state: State) => state.messages.data,
  (messages) => messages
);

function ChatList() {
  const data = useSelector(selectNumMessages);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(getMessages());
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div data-testid="chat-list">
      <h1 className={style.title}>Сообщения: </h1>
      <ul className={style.list}>
        {data.map((content, idx) => (
          <Message key={idx} content={content}></Message>
        ))}
      </ul>
    </div>
  );
}

export default ChatList;

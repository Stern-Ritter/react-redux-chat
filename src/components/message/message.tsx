import React from "react";
import styles from "./message.module.css";

function Message(content: MessageContent) {
  const { nickname, message, date } = content;
  return (
    <li className={styles.item}>
      <span className={styles.name}>{`${nickname}: `}</span>
      <span className={styles.message}>{message}</span>
      <span className={styles.data}>{date}</span>
    </li>
  );
}

export default Message;

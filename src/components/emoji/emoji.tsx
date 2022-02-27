import React from "react";
import styles from "./emoji.module.css";

function Emoji(props: EmojieProps) {
  const { code } = props;
  return (
    <span className={styles.emoji} role="img">
      {code}
    </span>
  );
}

export default Emoji;

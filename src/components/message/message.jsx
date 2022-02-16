import styles from './message.module.css';

function Message({ content }) {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{`${content.nickname}: `}</span>
      <span className={styles.message}>{content.message}</span>
      <span className={styles.data}>{content.date}</span>
    </li>
  );
}

export default Message;

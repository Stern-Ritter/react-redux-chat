import styles from './emoji.module.css';

function Emoji({code}) {
  return (
    <span className={styles.emoji} role="img">{code}</span>
  );
}

export default Emoji;

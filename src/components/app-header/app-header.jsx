import styles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={styles.header}>
      <a href="./" className={styles.link}>
        <span className={styles.logo} />
        <span>React-redux чат</span>
      </a>
    </header>
  );
}

export default AppHeader;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatList from "../chat-list/chat-list";
import ChatForm from "../chat-form/chat-form";
import AppHeader from "../app-header/app-header";
import { getMessages } from "../../services/actions";
import styles from "./app.module.css";

function App() {
  const { hasError } = useSelector((store) => store.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  return (
    <>
      {hasError ? (
        <>
          <h1>Что-то пошло не так...</h1>
          <p>
            В приложении произошла ошибка. Пожалуйста, перезагрузите страницу.
          </p>
        </>
      ) : (
        <>
          <AppHeader />
          <main className={styles.main}>
            <ChatList />
            <ChatForm />
          </main>
        </>
      )}
    </>
  );
}

export default App;

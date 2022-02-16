import { useDispatch, useSelector } from "react-redux";
import {
  setSendMessageFromValue,
  sendMessage,
  MESSAGES_SEND_FORM_TEXT_INPUT_ENTER,
  MESSAGES_SEND_FORM_ADD_EMOJI
} from "../../services/actions/chat-form";
import EmojiesList from "../emojies-list/emojies-list";
import styles from './chat-form.module.css';

function ChatForm() {
  const { name, message } = useSelector((store) => store.sendMessages.form);
  const { sendMessageRequest, sendMessageFailed, textInputEnter } = useSelector(
    (store) => store.sendMessages
  );
  const dispatch = useDispatch();

  const onEnter = () => {
    dispatch({ type: MESSAGES_SEND_FORM_TEXT_INPUT_ENTER });
  }

  const onEmojiClick = (evt) => {
    if (evt.target.tagName === "SPAN") {
      dispatch({ type: MESSAGES_SEND_FORM_ADD_EMOJI, code: evt.target.textContent});
    }
  }

  const onFormChange = (evt) => {
    dispatch(setSendMessageFromValue(evt.target.name, evt.target.value));
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(sendMessage({ nickname: name, message }));
  };

  return (
    <form onSubmit={onFormSubmit} className={styles.form}>
      <label className={styles.label} htmlFor="name">Имя:</label>
      <input className={styles.input} type="text" onChange={onFormChange}
        value={name} name="name" id="name" />

      <label className={styles.label} htmlFor="message">Введите ваше сообщение:</label>
      <textarea className={styles["text-area"]} type="text" onFocus={onEnter}
        onChange={onFormChange} value={message} name="message" id="message"/>

      { sendMessageFailed && <p className={styles.error}>Ошибка отправки сообщения.</p>}
      { textInputEnter && <EmojiesList styles={styles.emojies} clickHandler={onEmojiClick}/> }

      <button className={styles.button} type="submit" disabled={sendMessageRequest}>
        Отправить
      </button>
    </form>
  );
}

export default ChatForm;

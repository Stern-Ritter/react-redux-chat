import { config, checkResponse } from "../../utils/api";
import { AppDispatch } from "../store/store";

export const GET_MESSAGES = "GET_MESSAGES";
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS";
export const GET_MESSAGES_FAILED = "GET_MESSAGES_FAILED";

export function getMessages() {
  return async function (dispatch: AppDispatch) {
    dispatch({ type: GET_MESSAGES });
    try {
      const res = await fetch(
        `${config.firebaseBaseUrl}/${config.firebaseCollection}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data: MessageContent[] = await checkResponse(
        res,
        "application/json"
      );
      const messages = Object.values(data).map((message) => ({
        ...message,
        nickname: message.nickname || "Неизвестный",
        date: Number.isNaN(new Date(message.date))
          ? "Неизвестно"
          : new Date(message.date).toLocaleString("ru-RU"),
      }));
      dispatch({ type: GET_MESSAGES_SUCCESS, payload: messages });
    } catch (err) {
      dispatch({ type: GET_MESSAGES_FAILED });
    }
  };
}

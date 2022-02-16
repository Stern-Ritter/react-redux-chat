import { config, checkResponse } from "../../utils/api";

export const GET_MESSAGES = "GET_MESSAGES";
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS";
export const GET_MESSAGES_FAILED = "GET_MESSAGES_FAILED";

export function getMessages() {
  return async function (dispatch) {
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
      const data = await checkResponse(res, "application/json");
      const messages = Object.values(data).map((message) => ({
        ...message,
        nickname: message.nickname || "Неизвестный",
        date: isNaN(new Date(message.date))
          ? "Неизвестно"
          : new Date(message.date).toLocaleString("ru-RU"),
      }));
      dispatch({ type: GET_MESSAGES_SUCCESS, data: messages });
    } catch (err) {
      dispatch({ type: GET_MESSAGES_FAILED });
    }
  };
}
